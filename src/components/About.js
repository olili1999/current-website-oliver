import Twemoji from 'react-twemoji';

import ChinaEmoji from './ChinaEmoji'; 
import OliverDadLittle from '../oliver_dad_little.png'


const About = () =>{
  return (
    <div className = "text-aesopgrey mt-8 ml-6 mr-6 md:w-2/5 md:mx-auto md:flex md:flex-col md:justify-center">
      <img className = "w-44 h-44 rounded-sm" src = {OliverDadLittle}/> 
      <p className = "text-left mt-4"> Hi 👋. I'm Oliver (李悠然), or in Chinese. I was born and raised in Michigan, but my parents grew up in China 🇨🇳. They immigrated here in 
      search of a better life when they were in their mid-20's, knowing barely enough English to survive. 
      They raised my sister (李友阳) in China until she was 6 and she immigrated here. Then, I was born. </p>
      <p className = "text-left mt-4">A lot of my life growing up revolved (and still does revolve) around playing tennis 🎾. Tennis has defined a lot of my identity for better 
      and for worse. Nowadays, 
      I spend a lot of my time playing with some of my best friends and coaching some really great junior players. </p>
      <p className = "text-left mt-4"> Professionally speaking, I'm really interested in product management and building great consumer software. During college, 
      I worked at a variety of great companies like Belvedere Trading, Microsoft, Coupa (Llamasoft), Enova International, Kode Labs, and Principal Financial Group. 
      At each of these companies, I learned a lot about each of the three pillars of product management (engineering, business, design) which have made me much more confident
      in kickstarting my career as a product manager. 
      </p> 
      <p className = "text-left mt-4 mb-8"> Starting this September, I'm really excited to join Gopuff's very first Associate Product Management (APM) cohort this September
      focusing on post-purchase customer experience and estimated time of arrivals (ETAs).</p>

    </div>
  );
}
export default About;