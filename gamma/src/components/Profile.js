import React from "react";
import AuthService from "../services/auth.service";
import { useParams } from "react-router-dom";
import image from "../Images/home.jpeg"
const Profile = () => {
  const currentManager = AuthService.getCurrentManager();
  console.log(currentManager);
  // console.log(useParams);

  return (
    <div className="container">
      <img src={image} id="imgt2" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <header className="jumbotron">

        <h3>Branch_Name: <strong>{currentManager.branch.Branch_Name}</strong></h3>

      </header>

      {
        //   <p>
        //   <strong>Token:</strong> {currentManager.accessToken.substring(0, 20)} ...{" "}
        //   {currentManager.accessToken.substr(currentManager.accessToken.length - 20)}
        // </p>
      }
      {
        //   <p>
        //   <strong>Id:</strong> {currentManager.id}
        // </p>
        // <p>
        //   <strong>Email:</strong> {currentManager.email}
        // </p>
      }
      {
        //  <ul>
        //   {currentManager.roles &&
        //     currentManager.roles.map((role, index) => <li key={index}>{role}</li>)}
        // </ul>
      }
    </div>
  );
};

export default Profile;
