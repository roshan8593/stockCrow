import React from 'react';
import ecosystem from '../../assets/ecosystem.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Stats() {
    return ( <>
    <div className="container  " style={{marginTop:"6%"}}>
  <div className="row ">
    <div className="col-lg-5 col-md-12 col-sm-12 ">
      <h1 className='mb-5'>Trust with confidence</h1>
      <div>
        <h3 className='mt-4'>Customer-first always</h3>
        <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>
        <h3 className='mt-4'> No spam or gimmicks</h3>
        <p className="text-secondary"> No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
        <h3 className='mt-4'>The Stock Crow universe</h3>
        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
        <h3 className='mt-4'>Do better with money</h3>
        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
      </div>
    </div>
    <div className='col-2'>
    </div>
    <div className="col-lg-5 col-md-12 col-sm-12">
      <img src={ecosystem} alt="" style={{height:"90%",width:"120%"}} className='img-fluid' />
      <div style={{display:"flex",justifyContent:"center"}}>
      <a href="" style={{textDecoration:"none"}}> <p>Explore our products <ArrowRightAltIcon></ArrowRightAltIcon></p></a>
      <a href="" style={{textDecoration:"none"}}><p>Try Crow now</p></a>
      </div>
      
    </div>
  </div>
</div>
    </>);
}

export default Stats;