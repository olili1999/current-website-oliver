import React from 'react';
import { Link } from "react-router-dom";
import Headshot from  "../headshot.jpeg"


const Navbar = () =>{
  return (
  <div className = "flex items-center h-16 w-full shadow-sm">
    <span className = "ml-4 mr-4 w-full md:w-2/5 md:mx-auto flex flex-row items-center justify-between">
        <Link to = "/" className = "font-semibold text-aesopblack"> 
          <p className = "ml-2 md:ml-0 text-lg hover:opacity-75"> Oliver Li (李悠然) </p> 
        </Link>  
        <div> 
          <Link to = "/about" className = "text-aesopgrey hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack mr-2 ml-2"> About  </Link> 
          <Link to = "/work" className = "text-aesopgrey hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack mr-2 ml-2"> Work </Link> 
          <Link to = "/writing" className = "text-aesopgrey hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack mr-2 ml-2"> Writing </Link> 
        </div> 
    </span> 
  </div>
  );
}
export default Navbar;