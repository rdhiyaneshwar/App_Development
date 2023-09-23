import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Navbar.css";

const Navigation = () => {
  return (
    <nav className='landingNav'>
      <ul className='landingUl'>
      <Link to='/home'>
          <li className='LandList1'>HOME</li>
        </Link>
        <Link to='/loginsignup'>
          <li className='LandList'>FEEDBACK</li>
        </Link>
        <Link to='/'>
          <li className='LandList'>LOGIN</li>
        </Link>
        <Link to='/Form'>
          <li className='LandList'>FORM</li>
        </Link>
        <li class="dropdown">
      <a href="#" class="LandList">OUR SERVICES</a>
      <div class="dropdown-content">
        <a href="diet">DIET</a>
        <a href="show">ECO-HAVEN</a>
        <a href="show">SANITATION</a>
        <a href="show">MOBILIZING</a>
      </div>
    </li>
     
      </ul>
    </nav>
  );
}

export default Navigation;