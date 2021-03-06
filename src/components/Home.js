import Twemoji from 'react-twemoji';
import { Link } from "react-router-dom";
import Headshot from "../headshot.jpeg"

const Home = () =>{
    return (
    <div className = "mt-8 ml-6 mr-6 md:w-2/5 md:mx-auto md:flex md:flex-col md:items-center md:justify-center">
        <div className = "mb-4 w-full flex flex-col justify-start items-start font-semibold text-aesopblack">
            <img className = "object-cover rounded-sm w-44 h-44" src = {Headshot}/>
            <p className= "mt-4 mr-2 text-xl"> Hi, I'm Oliver 👋 </p> 
        </div> 
        <p className = "leading-loose text-aesopgrey text-left font-normal"> I'm a recent graduate
        of the University of Michigan with a dual degree in&nbsp;
            <a className = "underline underline-offset-4 hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack" href = "https://ioe.engin.umich.edu/">Industrial & Operations Engineering</a> 
            &nbsp;and&nbsp; 
            <a className = "underline underline-offset-4 hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack" href = "https://www.si.umich.edu/programs/bachelor-science-information">UX Design/Information Analysis</a>  
            &nbsp;with a minor in Computer Science. 
        </p> 
        <p className = "mt-4 leading-loose text-left font-normal text-aesopgrey">
            I am an incoming associate product manager at&nbsp;
            <a className = "underline underline-offset-4 hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack" href = "https://gopuff.com/"> 
            Gopuff
            </a> 
            &nbsp;working on post-purchase customer experience and ETAs. 
            Currently working @
            <a className = "underline underline-offset-4 hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack" href = "https://www.intros.ai/"> 
             Intros AI
            </a> as their first product management hire and lead designer. 
    
            Previously @
            <a className = "underline underline-offset-4 hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack" href = "http://www.belvederetrading.com/">Belvedere Trading</a> 
            ,&nbsp;
            <a className = "underline underline-offset-4 hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack" href = "https://www.coupa.com/products/supply-chain-design" >
            Coupa (Llamasoft) 
            </a>,&nbsp;
            <a className = "underline underline-offset-4 hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack" href = "https://enova.com/" >
            Enova International 
            </a>,&nbsp;
            <a className = "underline underline-offset-4 hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack" href = "https://kodelabs.com/">
            Kode Labs 
            </a>&nbsp;working as a product manager,&nbsp;
            <a className = "underline underline-offset-4 hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack" href = "https://www.principal.com/">Principal Financial Group</a> doing data science, and&nbsp; 
            <a className = "underline underline-offset-4 hover:font-semibold active:text-aesopblack active:text-semibold focus:text-semibold focus:text-aesopblack hover:text-aesopblack" href = "https://www.microsoft.com/en-us/research/people/suri/">Microsoft</a> doing research.  
        </p> 
        <div className = "flex flex-row items-center justify-center"> 
            <Link exact to = "/about"> 
                <button className = "mr-2 mt-8 px-6 py-1.5 rounded border-2 border-aesopblack hover:opacity-75 text-aesopblack"> 
                    More about me
                </button> 
            </Link>
            <Link exact to = "/work"> 
            <button className = "ml-2 mt-8 px-6 py-2 rounded bg-aesopblack hover:opacity-75 text-zinc-100"> 
                See work
            </button> 
            </Link>
        </div> 
        
    </div>
    );
  }
  export default Home;