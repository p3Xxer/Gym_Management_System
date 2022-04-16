import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/user.service";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
const Home = () => {
//   const particlesInit = async (main) => {
//   console.log(main);

//   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//   // starting from v2 you can add only the features you need reducing the bundle size
//   await loadFull(main);
// };

// const particlesLoaded = (container) => {
//   console.log(container);
//};
return (
  <div className="App">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Hey Bro")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Welcomes You")
       .start();
       }}
       />
    </div>
)}

export default Home;
