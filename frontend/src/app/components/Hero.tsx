import Image from 'next/image';
import heroimage from '../assets/hero11.jpg';
import "./Hero.css";

const Hero = () => {
    return (
      <div className="hero-container">
        <Image 
          src={heroimage} 
          alt="Hero" 
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Welcome to Shub EV</h1>
          <p className="quote">"Driving the Future of Electric Mobility"</p>
        </div>
      </div>
    );
  };
  
  export default Hero;

