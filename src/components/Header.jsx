import React from 'react';
import '../styles/Header.css';
import arroww from "../components/Assets/icons/icon-park-outline_down.png"
import user from "../components/Assets/icons/user 1.png"
import logo from "../components/Assets/Pictures/logo.png"
import menu from "../components/Assets/icons/ep_menu.png"
import search from "../components/Assets/icons/iconamoon_search.png"
import cart from "../components/Assets/icons/shopping-cart 1.png"



const Header = () => {
  return (
    <header>
      <div className="main-header">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <input type="text" placeholder="Search for your items..." />
        </div>
        <div>
          <button><img src={user} alt="" />Login/Registration</button>
          <button><img src={cart} alt="" />Cart</button>
        </div>


      </div>
      <nav>
        <ul>
          <li><img src={menu} alt="" />All Categories<img src={arroww} alt="" /></li>
          <li>Home</li>
          <li>Collection<img src={arroww} alt="" /></li>
          <li>New Arrivals</li>
          <li>Woman Wears</li>
          <li>Men's Wears</li>
          <li>Brands</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;

