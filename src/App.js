import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Work from "./components/Work";
import Writing from "./components/Writing";

import {Headshot} from  "./headshot.jpeg"



import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Twemoji from 'react-twemoji';


function App() {
  return (
    <div className="App bg-aesopwhite font-suisse z-0">
        <BrowserRouter>
          <Navbar></Navbar> 
          <Routes>
            <Route path="/about" element={<About/>}>
            </Route>
            <Route path="/work" element={<Work/>}>
            </Route>
            <Route path="/writing" element={<Writing/>}>
            </Route>
            <Route path="/" element={<Home/>}>
            </Route>
          </Routes>
        </BrowserRouter>
 
    </div>
  );
}

export default App;
