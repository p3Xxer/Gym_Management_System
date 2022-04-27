import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/user.service";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
import TypeWriterEffect from 'react-typewriter-effect';
import sample from "../Videos/ropes.mp4"
import image from "../Images/house.jpeg"

import "../components/Member/Member.css"
const Home = () => {
    const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div align="center">
      <img src={image} id="imgt" />
      {/* <TypeWriterEffect
        textStyle={{
          fontFamily: 'Montserrat',
          color: 'white',
          fontWeight: 'Bold',
          fontSize: '3em',
        }}
        startDelay={500}
        cursorColor="#3F3D56"
        multiText={[
          ' IF YOU DON\'T KNOW WHERE YOU ARE GOING, YOU WILL WIND UP SOMEWHERE ELSE. -YOGI BERRA',

        ]}
        multiTextDelay={1000}
        typeSpeed={80}
      /> */}
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      
      <h1 className="homename">GYM</h1>
    </div>

  )
}

export default Home;
