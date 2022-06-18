import React from 'react';
import { Link } from "react-router-dom";
import Headshot from  "../headshot.jpeg"

const Navbar = () =>{
  return (
  <div className = "flex justify-start items-center h-14 w-full shadow-sm">
    <span className = "ml-60 flex font-lato ">
        <Link to = "/" className = "font-bold mr-5 ml-5"> 
            <div className = "flex"> 
                <img className = "h-6 w-6 object-cover rounded-full" src = {Headshot}/> 
                <p className = "ml-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-600 animate-text"> Oliver Li </p> 
            </div> 
        </Link> 
        <Link to = "/about"className = "mr-5 ml-5 font-lato "> About  </Link> 
        <Link to = "/work" className = "mr-5 ml-5 font-lato "> Work </Link> 
        <Link to = "/writing" className = "mr-5 ml-5 font-lato "> Writing </Link> 
    </span> 
  </div>
  );
}
export default Navbar;