import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import {Headshot} from  "./headshot.jpeg"



import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar></Navbar> 
          <Routes>
            <Route path="/about" element={<About/>}>
            </Route>
            <Route path="/" element={<Home/>}>
            </Route>
          </Routes>
        </BrowserRouter>
 
    </div>
  );
}

export default App;
