import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Wrapperhome from './landingpage/home/onehome'
import Aboutpage from './landingpage/about/Aboutpage'
import Pricingpage from './landingpage/pricing/Pricingpage'
import Productpage from './landingpage/products/productpage'
import Signup from './landingpage/signup/Signup'
import Supportpage from './landingpage/support/Supportpage'
import Navbar from './landingpage/Navbar'
import Footer from './landingpage/footer'

import {Routes, Route} from "react-router"




function App() {
  

  return (
    <>
     <div style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Wrapperhome/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/about' element={<Aboutpage/>}></Route>
      <Route path='/product' element={<Productpage/>}></Route>
      <Route path='/pricing' element={<Pricingpage/>}></Route>
      <Route path='/support' element={<Supportpage/>}></Route>
    </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App
