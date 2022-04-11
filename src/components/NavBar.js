import React,{useState} from 'react';
import logo from './Logo.png'
import {NavLink} from "react-router-dom"
const NavBar = () => {
  const [toggle,setToggle]=useState(true)

  const please = () =>{
    setToggle(!toggle)
    if(toggle)
    {
      document.getElementById('imp-nav').style.display='block'
      document.getElementById('right-btn').style.top='5px'
      document.getElementById('right-btn').style.left='20px'
    }
    else{
      document.getElementById('right-btn').style.left='100px'
      document.getElementById('right-btn').style.top='-32px'
      document.getElementById('imp-nav').style.display='none'
    }
  }
  
 
  return <div>
    
      <div className="navbar">
        <nav id='nav'>
         <div className="dropDown" onClick={please}>
           <div className='q'></div>
           <div className='q'></div>
           <div className='q'></div>
         </div>

         <div className='imp-nav' id='imp-nav'>
        <div className="logo"><img src={logo} /></div>
         <ul>
           <NavLink to="/react-youthIndia/OurAbout" style={{textDecoration:"none"}}><li>About Us</li></NavLink>
           <NavLink to="/react-youthIndia/OurTeam" style={{textDecoration:"none"}}><li>Our Team</li></NavLink>
           <NavLink to="/react-youthIndia/OurWork" style={{textDecoration:"none"}}><li>Our Work</li></NavLink>
           <NavLink to="/react-youthIndia/OurEvent" style={{textDecoration:"none"}}><li id="imp">Our Event</li></NavLink>
         </ul>
         </div>
         <div className='right-btn' id='right-btn'>
         <button className='right-btn-1'>Join-us</button>
         <button className='right-btn-2'>Register</button>
         </div>
        </nav>
      </div>
      
  </div>;
};

export default NavBar;
