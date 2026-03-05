import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import "dotenv/config";

import user from "./models/userModel.js";
import order from "./models/orderModel.js";

const app = express();

/* Middleware */

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
 origin:[
   "https://stockcrow-fronend-main-page1.onrender.com",
   "https://stockcrow.onrender.com"
 ],
 credentials:true
}));

/* DB */

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connected"));

/* AUTH */

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

/* LOGIN + SIGNUP */

app.post("/signup", async(req,res)=>{

 try{

   const { username,password } = req.body;

   let existingUser = await user.findOne({username});

   if(existingUser){

     const match = await bcrypt.compare(
       password,
       existingUser.password
     );

     if(!match){
       return res.status(400).json({
         success:false
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
       success:true
     });
   }

   const salt = await bcrypt.genSalt(10);

   const hashedPassword =
   await bcrypt.hash(password,salt);

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

   res.json({success:true});

 }catch(err){
   res.status(500).json({success:false});
 }

});

/* LOGOUT */

app.post("/signout",(req,res)=>{
 res.clearCookie("token",{
   httpOnly:true,
   secure:true,
   sameSite:"none",
   path:"/"
 });

 res.json({success:true});
});

/* ORDERS */

app.post("/neworder", async(req,res)=>{

 try{

   const { name,qty,price,mode } = req.body;

   const newOrder = new order({
     name,
     qty,
     price,
     mode
   });

   await newOrder.save();

   res.json({success:true});

 }catch(err){
   res.status(500).json({success:false});
 }

});

app.get("/getorder", async(req,res)=>{

 try{

   const orders = await order.find({});

   res.json(orders);

 }catch(err){
   res.status(500).json([]);
 }

});

/* MARKET DATA */

app.get("/allholdings",async(req,res)=>{
 res.json(await mongoose.model("holding").find({}));
});

app.get("/allpositions",async(req,res)=>{
 res.json(await mongoose.model("position").find({}));
});

/* START */

const port = process.env.PORT || 3000;

app.listen(port,()=>{
 console.log("Server running");
});
