import Twemoji from 'react-twemoji';

import ChinaEmoji from './ChinaEmoji'; 
import OliverDadLittle from '../oliver_dad_little.png'


const About = () =>{
  return (
    <div className = "text-aesopgrey mt-8 ml-6 mr-6 md:w-2/5 md:mx-auto md:flex md:flex-col md:justify-center">
      <img className = "w-44 h-44 rounded-sm" src = {OliverDadLittle}/> 
      <p className = "text-left mt-4"> Hi 👋. I'm Oliver, or 李悠然 in Chinese. I was born and raised in Michigan, but my parents were raised in China 🇨🇳. They immigrated here in search of a better life when they 
      were in their mid-20's, knowing barely enough English to survive. They raised my sister (李友阳) in China until she was 6 and she immigrated here. Then, I was born. </p>
      <p className = "text-left mt-4">A lot of my life growing up revolved (and still does revolve) around playing tennis 🎾. Tennis has defined a lot of my identity for better and for worse. Nowadays, 
      I spend a lot of my time playing with some of my best friends and coaching junior players. </p>
    </div>
  );
}
export default About;