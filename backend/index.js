import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import "dotenv/config";

import holding from "./models/holdingModel.js";
import position from "./models/positionModel.js";
import order from "./models/orderModel.js";
import user from "./models/userModel.js";

const app = express();

/* ===============================
   MIDDLEWARE
================================ */

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
 origin:[
   "https://stockcrow-fronend-main-page1.onrender.com",
   "https://stockcrow.onrender.com"
 ],
 credentials:true
}));

/* ===============================
   DATABASE
================================ */

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

const port = process.env.PORT || 3000;

/* ===============================
   AUTH MIDDLEWARE
================================ */

const verifyUser = (req,res,next)=>{
 try{

   const token = req.cookies.token;

   if(!token){
     return res.status(401).json({
       success:false,
       message:"Unauthorized"
     });
   }

   const decoded = jwt.verify(
     token,
     process.env.SECRET_KEY
   );

   req.user = decoded;

   next();

 }catch(err){
   return res.status(401).json({
     success:false
   });
 }
};

/* ===============================
   AUTH ROUTES
================================ */

app.post("/signup", async(req,res)=>{

 try{

   const { username, password } = req.body;

   let existingUser = await user.findOne({username});

   /* LOGIN FLOW */
   if(existingUser){

     const match = await bcrypt.compare(
       password,
       existingUser.password
     );

     if(!match){
       return res.status(400).json({
         success:false,
         message:"Invalid password"
       });
     }

     const token = jwt.sign(
       { userid:existingUser._id },
       process.env.SECRET_KEY,
       { expiresIn:"1h" }
     );

     res.cookie("token",token,{
       httpOnly:true,
       secure:true,
       sameSite:"none",
       path:"/"
     });

     return res.json({
       success:true,
       message:"Login successful"
     });
   }

   /* SIGNUP FLOW */

   const salt = await bcrypt.genSalt(10);

   const hashedPassword = await bcrypt.hash(
     password,
     salt
   );

   const newUser = new user({
     username,
     password:hashedPassword
   });

   await newUser.save();

   const token = jwt.sign(
     { userid:newUser._id },
     process.env.SECRET_KEY,
     { expiresIn:"1h" }
   );

   res.cookie("token",token,{
     httpOnly:true,
     secure:true,
     sameSite:"none",
     path:"/"
   });

   res.json({
     success:true,
     message:"Signup successful"
   });

 }catch(err){
   res.status(500).json({
     success:false
   });
 }

});

/* ===============================
   LOGOUT
================================ */

app.post("/signout",(req,res)=>{
 res.clearCookie("token",{
   httpOnly:true,
   secure:true,
   sameSite:"none",
   path:"/"
 });

 res.json({success:true});
});

/* ===============================
   PROTECTED USER
================================ */

app.get("/me",verifyUser,(req,res)=>{
 res.json({
   success:true,
   userid:req.user.userid
 });
});

/* ===============================
   ORDERS
================================ */

app.post("/neworder",verifyUser, async(req,res)=>{

 try{

   const { name, qty, price, mode } = req.body;

   const newOrder = new order({
     name,
     qty,
     price,
     mode,
     userId:req.user.userid
   });

   await newOrder.save();

   res.json({
     success:true
   });

 }catch(err){
   res.status(500).json({
     success:false
   });
 }

});

/* Get user specific orders */

app.get("/getorder",verifyUser, async(req,res)=>{

 const orders = await order.find({
   userId:req.user.userid
 });

 res.json(orders);

});

/* ===============================
   MARKET DATA
================================ */

app.get("/allholdings",async(req,res)=>{
 const data = await holding.find({});
 res.json(data);
});

app.get("/allpositions",async(req,res)=>{
 const data = await position.find({});
 res.json(data);
});

/* ===============================
   START SERVER
================================ */

app.listen(port,()=>{
 console.log("Server running on",port);
});
