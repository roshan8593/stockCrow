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

/* Middleware */

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
 origin:[
   "http://localhost:5173",
   "http://localhost:5174"
 ],
 credentials:true
}));

/* DB Connection */

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

const port = process.env.PORT || 3000;

/* =========================
 SEED DATA (SAFE ⭐)
========================= */

app.get("/seed", async(req,res)=>{

 try{

   const holdings = [
     { name:"BHARTIARTL", qty:2, avg:538.05, price:541.15, net:"+0.58%", day:"+2.99%" },
     { name:"HDFCBANK", qty:2, avg:1383.4, price:1522.35, net:"+10.04%", day:"+0.11%" },
     { name:"HINDUNILVR", qty:1, avg:2335.85, price:2417.4, net:"+3.49%", day:"+0.21%" }
   ];

   const positions = [
     { product:"CNC", name:"EVEREADY", qty:2, avg:316.27, price:312.35, net:"+0.58%", day:"-1.24%", isLoss:true },
     { product:"CNC", name:"JUBLFOOD", qty:1, avg:3124.75, price:3082.65, net:"+10.04%", day:"-1.35%", isLoss:true }
   ];

   const hCount = await holding.countDocuments();
   const pCount = await position.countDocuments();

   if(hCount === 0){
     await holding.insertMany(holdings);
   }

   if(pCount === 0){
     await position.insertMany(positions);
   }

   res.send("Seed completed");

 }catch(err){
   res.status(500).send("Seed failed");
 }

});

/* =========================
 AUTH
========================= */

app.post("/signup", async(req,res)=>{

 try{

   const { username,password } = req.body;

   let existingUser = await user.findOne({username});

   if(existingUser){

     const match = await bcrypt.compare(password,existingUser.password);

     if(!match){
       return res.status(400).json({success:false});
     }

     const token = jwt.sign(
       { userid:existingUser._id },
       process.env.SECRET_KEY,
       { expiresIn:"1h" }
     );

     res.cookie("token",token,{
       httpOnly:true,
       sameSite:"lax"
     });

     return res.json({success:true});
   }

   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password,salt);

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
     sameSite:"lax"
   });

   res.json({success:true});

 }catch(err){
   res.status(500).json({success:false});
 }

});

/* Logout */

app.post("/signout",(req,res)=>{
 res.clearCookie("token");
 res.json({success:true});
});

/* =========================
 DATA ROUTES
========================= */

app.get("/allholdings",async(req,res)=>{
 res.json(await holding.find({}));
});

app.get("/allpositions",async(req,res)=>{
 res.json(await position.find({}));
});

/* =========================
 ORDERS
========================= */

app.post("/neworder",async(req,res)=>{

 try{

   const { name,qty,price,mode } = req.body;

   const newOrder = new order({
     name,
     qty,
     price,
     mode,
     createdAt:new Date()
   });

   await newOrder.save();

   res.json({success:true});

 }catch(err){
   res.status(500).json({success:false});
 }

});

app.get("/getorder",async(req,res)=>{

 try{
   const data = await order.find({})
   .sort({createdAt:-1});

   res.json(data);

 }catch(err){
   res.status(500).json([]);
 }

});

/* Start Server */

app.listen(port,()=>{
 console.log("Server running on",port);
});
