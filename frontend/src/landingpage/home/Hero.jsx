import React from 'react';
import homeHero from '../../assets/homeHero.png'
import { display, textAlign } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import largestBroker from '../../assets/largestBroker.svg'
import Container from "@mui/material/Container";
import achievements from '../../assets/pressLogos.png'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


function Hero() {
    return (<>
     <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"115px"}}>
    <img src={homeHero} alt="image not found" style={{width:"80vw",marginTop:"2%"}}/>
    
    <h1 style={{marginTop:"40px"}}>Invest In Everything</h1>
    <small style={{color:"grey",marginTop:"10px"}}>online platform to invest in stocks,derivatives,mutual funds and more</small>
    <br />
    <Button variant="contained">Sign up</Button>
  </div>



  <div class="container text-center mt-5" >
  <div class="row g-5" style={{height:"80%"}} >
    <div class="col-lg-6 col-md-12">
      <img src={largestBroker} alt="" style={{width:"100%"}}/>
    </div>
    <div class="col-lg-6 cold-md-12 " style={{display:"flex",flexDirection:"column",paddingTop:"3%"}}>
      <h1>Largest stock broker in India</h1>
      <p> 2+ million stock crow clients contribute to over 15% of all retail order volumes in india daily by trading and investing in</p>
      <div className="row" style={{marginTop:"10%",flexGrow:"0.5"}}>
        <div className="col">
        <ul style={{height:"100%",lineHeight:"2",fontSize:""}} >
        <li style={{textAlign:"start"}}>Futures and Options</li>
        <li style={{textAlign:"start"}}>Stocks & Ipos</li>
        <li style={{textAlign:"start"}}>Currency and derivatives</li>
      </ul>
        </div>
        <div className="col">
        <ul style={{height:"100%",lineHeight:"2",fontSize:""}}>
        <li style={{textAlign:"start"}}>Commodity derivatives </li>
        <li style={{textAlign:"start"}}>Direct mutual funds</li>
        <li style={{textAlign:"start"}}>Bonds and government</li>
      </ul>
        </div>
      </div>
      <img src={achievements} alt="" style={{marginTop:"3%"}} />
    </div>
    
  </div>
</div>   
    </>);
   
    

}

export default Hero;


