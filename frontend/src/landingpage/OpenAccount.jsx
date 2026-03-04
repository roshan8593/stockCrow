import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
function OpenAccount() {

  const navigate = useNavigate();
  function clickFunction(){
    
    navigate('/signup')
  }
    return ( <>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"7%",marginBottom:"7%"}}>
   
    
    <h1 style={{marginTop:"40px"}}>Open an account</h1>
    <small style={{color:"grey",marginTop:"10px"}}>Modern platforms and apps, 20 investments, and flat 220 intraday and F&O trades</small>
    <br />
    <Button variant="contained" onClick={clickFunction}>Sign up now</Button>
  </div></> );
}

export default OpenAccount;