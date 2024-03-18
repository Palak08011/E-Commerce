import React from "react";
import "./Hero.css"
// import hero_image from"../Assets/hero_image.jpeg"
const Hero = () =>{
    return(<div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
         <button>Buy</button>
            
        </div>
        {/* <div className="hero-right">
            <img src={hero_image} alt=""></img>
        </div> */}
    </div>)
}
export default Hero