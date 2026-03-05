import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import holding from './models/holdingModel.js';
import position from './models/positionModel.js';
import order from './models/orderModel.js';
import cors from 'cors';
import bcrypt from "bcryptjs";
import user from './models/userModel.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
const port = process.env.PORT || 3000;
app.use(cors({
  origin: ["https://stockcrow-fronend-main-page1.onrender.com","https://stockcrow.onrender.com"],
  credentials: true
}));
app.use(express.json());       
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log('Server is running')
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("DB Connected");
    }
    )
  })


app.get('/initholding',async(req,res)=>{
    const holdingdata = [
        {
          name: "BHARTIARTL",
          qty: 2,
          avg: 538.05,
          price: 541.15,
          net: "+0.58%",
          day: "+2.99%",
        },
        {
          name: "HDFCBANK",
          qty: 2,
          avg: 1383.4,
          price: 1522.35,
          net: "+10.04%",
          day: "+0.11%",
        },
        {
          name: "HINDUNILVR",
          qty: 1,
          avg: 2335.85,
          price: 2417.4,
          net: "+3.49%",
          day: "+0.21%",
        },
        {
          name: "INFY",
          qty: 1,
          avg: 1350.5,
          price: 1555.45,
          net: "+15.18%",
          day: "-1.60%",
          isLoss: true,
        },
        {
          name: "ITC",
          qty: 5,
          avg: 202.0,
          price: 207.9,
          net: "+2.92%",
          day: "+0.80%",
        },
        {
          name: "KPITTECH",
          qty: 5,
          avg: 250.3,
          price: 266.45,
          net: "+6.45%",
          day: "+3.54%",
        },
        {
          name: "M&M",
          qty: 2,
          avg: 809.9,
          price: 779.8,
          net: "-3.72%",
          day: "-0.01%",
          isLoss: true,
        },
        {
          name: "RELIANCE",
          qty: 1,
          avg: 2193.7,
          price: 2112.4,
          net: "-3.71%",
          day: "+1.44%",
        },
        {
          name: "SBIN",
          qty: 4,
          avg: 324.35,
          price: 430.2,
          net: "+32.63%",
          day: "-0.34%",
          isLoss: true,
        },
        {
          name: "SGBMAY29",
          qty: 2,
          avg: 4727.0,
          price: 4719.0,
          net: "-0.17%",
          day: "+0.15%",
        },
        {
          name: "TATAPOWER",
          qty: 5,
          avg: 104.2,
          price: 124.15,
          net: "+19.15%",
          day: "-0.24%",
          isLoss: true,
        },
        {
          name: "TCS",
          qty: 1,
          avg: 3041.7,
          price: 3194.8,
          net: "+5.03%",
          day: "-0.25%",
          isLoss: true,
        },
        {
          name: "WIPRO",
          qty: 4,
          avg: 489.3,
          price: 577.75,
          net: "+18.08%",
          day: "+0.32%",
        },
      ];

      holdingdata.forEach((item)=>{
       let newholding = new holding({
            name:item.name,
            qty:item.qty,
            avg:item.avg,
            price:item.price,
            net : item.net,
            day:item.day

        })
        newholding.save();
       
      })
     
      res.send("done data intialized")
     
      

})

app.get('/initposition', async(req,res)=>{
    const positions = [
        {
          product: "CNC",
          name: "EVEREADY",
          qty: 2,
          avg: 316.27,
          price: 312.35,
          net: "+0.58%",
          day: "-1.24%",
          isLoss: true,
        },
        {
          product: "CNC",
          name: "JUBLFOOD",
          qty: 1,
          avg: 3124.75,
          price: 3082.65,
          net: "+10.04%",
          day: "-1.35%",
          isLoss: true,
        },
      ];

      positions.forEach((item)=>{
        let positiondata = new position({
            product:item.product,
            name:item.name,
            qty:item.qty,
            avg:item.avg,
            price:item.price,
            net:item.net,
            day:item.day,
            isLoss:item.isLoss
        })
        positiondata.save()
      })
      
      res.send("position data intialized")

      
})

app.get('/allholdings',async(req,res)=>{
    let allholdings = await holding.find({})
    res.json(allholdings)
})

app.get('/allpositions',async(req,res)=>{
    let allpositions = await position.find({})
    res.json(allpositions)
})

app.post('/neworder',async(req,res)=>{
     let newOrder = new order({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode
     })
      await newOrder.save();
     res.send("order saved")
})

app.get('/getorder',async(req,res)=>{
    let getorders= await order.find({})
    res.json(getorders)
})

app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    let existingUser = await user.findOne({ username });

   
    if (!existingUser) {

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new user({
        username,
        password: hashedPassword
      });

      await newUser.save();

      const token = jwt.sign(
        { userid: newUser._id },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax"
      });

      return res.json({
        success: true,
        message: "Signup successful"
      });
    }


    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password"
      });
    }

  
    const token = jwt.sign(
      { userid: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax"
    });

    return res.json({
      success: true,
      message: "Login successful"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});
app.post('/signout', (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax"
  });

  res.json({ success: true });  
});
app.get("/me", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send("Not logged in");
  }

  res.send("Logged in");
});

