import React from "react";
import AuthService from "../services/auth.service";
import { useParams } from "react-router-dom";
import image from "../Images/home.jpeg"
import "../components/Member/Member.css"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Profile = () => {
  const currentManager = AuthService.getCurrentManager();
  console.log(currentManager);
  // console.log(useParams);

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <img src={image} id="imgt2" />
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        zIndex: -5,
        zLayers:0.1,
        
        fpsLimit: 1000,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode:"grab"
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 8,
            },
            repulse: {
              distance: 200,
              duration: 10,
            },
          },
        },
        particles: {
          color: {
            value: "",
          },
          links: {
            color: "#ff0000",
            distance: 150,
            enable: true,
            opacity: 0.8,
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
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.8,
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
      <table class = "prof">
        <tbody>
          <tr>
            <td class="prof2">Branch Name: </td>
            <td class="prof2">{currentManager.branch.Branch_Name}</td>
          </tr>
          <tr>
          <td class="prof2">Branch Location: </td>
            <td class="prof2">{currentManager.branch.Branch_Location}</td>
          </tr>
          <tr>
            <td class="prof2">Branch Email: </td>
            <td class="prof2">{currentManager.branch.Branch_Email}</td>
          </tr>
          <tr>
          <td class="prof2">Phone Number: </td>
            <td class="prof2">{currentManager.branch.Branch_Phone_Number}</td>
          </tr>
          <tr>
            <td class="prof2">Manager ID: </td> 
            <td class="prof2">{currentManager.branch.Manager_ID}</td>
          </tr>
          <tr>
          <td class="prof2">Manager Name: </td>
            <td class="prof2">{currentManager.branch.Manager_Name}</td>
          </tr>
          <tr>
            <td class="prof2">Manager Email: </td>
            <td class="prof2">{currentManager.branch.Manager_Email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
