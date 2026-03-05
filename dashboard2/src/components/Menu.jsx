import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {

    try {
      await axios.post("https://stockcrow-backend.onrender.com/signout", {}, {
        withCredentials: true
      });

      // Redirect to signup page (main frontend port)
      window.location.href = "https://stockcrow-fronend-main-page1.onrender.com";

    } catch (error) {
      console.error("Logout failed");
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <QueryStatsIcon/>

      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)} style={{textDecoration:"none"}}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)} style={{textDecoration:"none"}}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)} style={{textDecoration:"none"}}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)} style={{textDecoration:"none"}}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)} style={{textDecoration:"none"}}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

         
   
        </ul>

        <hr />

        <div className="profile">
          <div 
            style={{ cursor: "pointer", color: "red" }} 
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
