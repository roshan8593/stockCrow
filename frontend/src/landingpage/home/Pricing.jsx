import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import varsity from '../../assets/education.svg'
function Pricing() {
    return ( <>

    <div className='container ' style={{display:"flex",marginTop:"7%",justifyContent:"space-between"}}>
    <div class=" " style={{width:"25vw"}}>
  <div class="row">
    <div class="col ">
      <h1>Unbeatable pricing</h1>
      <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
      <a href="">see pricing <ArrowRightAltIcon></ArrowRightAltIcon></a>
    </div>
    </div>
    </div>

  <div class="row " style={{width:"30vw"}}>
    <div className="col border d-flex flex-column justify-content-center align-items-center text-center" >
      <h1> &#8377;0</h1>
      <p>Free equity delivery</p>
    </div>
    <div className="col border d-flex flex-column justify-content-center align-items-center text-center" >
      <h1>&#8377;20</h1>
      <p>Intraday and F&0</p>
    </div>
  </div>
    </div>

<div className='container ' style={{marginTop:"7%"}}>
<div className="row">
    <div className="col">
        <img src={varsity} alt="" />
    </div>
    <div className="col pt-5">
        <h1>Free and open market education</h1>
        <br />
        <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
        <a href="">varsity<ArrowRightAltIcon></ArrowRightAltIcon></a>
        <br />
        <br />
        <p className='text-muted'>TradingQ&A, the most active trading and investment comm' India for all your market related queries</p>
        <a href="">TradingQ&A <ArrowRightAltIcon></ArrowRightAltIcon></a>
    </div>
</div>
</div>
   
    


    </> );
}

export default Pricing;