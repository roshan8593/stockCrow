import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import order from "./models/orderModel.js";

const app = express();

/* Middleware */

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
 origin:[
   "https://stockcrow-fronend-main-page1.onrender.com",
   "https://stockcrow.onrender.com"
 ],
 credentials:true
}));

/* Database */

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connected"));

/* ⭐ ORDER ROUTES */

/* Place Order */

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

   res.json({
     success:true
   });

 }catch(err){
   res.status(500).json({
     success:false
   });
 }

});

/* Get Orders */

app.get("/getorder", async(req,res)=>{

 try{

   const orders = await order
   .find({})
   .sort({createdAt:-1});

   res.json(orders);

 }catch(err){
   res.status(500).json([]);
 }

});

/* ⭐ Market Data */

app.get("/allholdings",async(req,res)=>{
 res.json([]);
});

app.get("/allpositions",async(req,res)=>{
 res.json([]);
});

/* Start Server */

const port = process.env.PORT || 3000;

app.listen(port,()=>{
 console.log("Server running on",port);
});
