import React from 'react';
import { Link } from "react-router-dom";
import Headshot from  "../headshot.jpeg"

import { NavLink } from "react-router-dom";









const Navbar = () =>{


  // const navLinkStyles = ({isActive}=>{ 
  //   return  {
  //     fo
  //   }
  // }); 

  

  return (

  <div className = "flex items-center h-16 w-full shadow-sm">
    <span className = "ml-4 mr-4 w-full md:w-2/5 md:mx-auto flex flex-row items-center justify-between">
        <NavLink exact to = "/" className = "font-semibold text-aesopblack"> 
          <p className = "ml-2 md:ml-0 text-lg hover:opacity-75"> Oliver Li (李悠然) </p> 
        </NavLink>  

        {/* https://stackoverflow.com/questions/70402808/isactive-style-in-react-router-v-6 */}
        <div> 
          <NavLink exact to = "/about" 
                   
          className = {({isActive}) => "text-aesopgrey hover:font-semibold hover:text-aesopblack mr-2 ml-2 " + 
          (isActive ? "underline underline-offset-4 font-semibold text-aesopblack": "")}>About</NavLink> 
          <NavLink exact to = "/work" 
          className = {({isActive}) => "text-aesopgrey hover:font-semibold hover:text-aesopblack mr-2 ml-2 " 
          +  (isActive ? "underline underline-offset-4 font-semibold text-aesopblack": "")}>Work</NavLink> 
          <NavLink exact to = "/writing" 
          className = {({isActive}) => "text-aesopgrey hover:font-semibold hover:text-aesopblack mr-2 ml-2 " + 
          ( (isActive ? "underline underline-offset-4 font-semibold text-aesopblack": ""))}>Writing</NavLink> 
        </div> 
    </span> 
  </div>
  );
}
export default Navbar;