import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './navbar.css';

function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();   // ✅ Yaha hona chahiye

  useEffect(() => {
    axios.get("http://localhost:3000/me", {
      withCredentials: true
    })
    .then(() => setIsLoggedIn(true))
    .catch(() => setIsLoggedIn(false));
  }, []);

  const handleLogout = async () => {
    await axios.post("http://localhost:3000/signout", {}, {
      withCredentials: true
    });

    setIsLoggedIn(false);   // ✅ state update
    navigate("/signup");   // ✅ redirect
  };

  return ( 
    <div className='sticky-top'>
      <Box sx={{ flexGrow: 1 ,display:"flex"}}>
        <AppBar position="sticky" sx={{px:"50px",minHeight:"9vh",display:"flex",justifyContent:"center"}}>
          <Toolbar sx={{display:"flex", gap:"3%",flexWrap:"wrap",flexDirection:"row",alignItems:"center",height:"100%"}}>
            
            <Typography variant="h4" component="div" sx={{ flexGrow: 5 }}>
              <QueryStatsIcon fontSize="large" /> Stock Crow
            </Typography>
           
            <Button color="inherit"><Link to="/about" style={{color:"white",textDecoration:"none"}}>About</Link></Button>
            <Button color="inherit"><Link to="/product" style={{color:"white",textDecoration:"none"}}>Product</Link></Button>
            <Button color="inherit"><Link to="/pricing" style={{color:"white",textDecoration:"none"}}>Pricing</Link></Button>
            <Button color="inherit"><Link to="/support" style={{color:"white",textDecoration:"none"}}>Support</Link></Button>

            {isLoggedIn ? (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit">
                <Link to="/signup" style={{color:"white",textDecoration:"none"}}>
                  Signup
                </Link>
              </Button>
            )}

            <IconButton size="large" edge="start" color="inherit">
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;