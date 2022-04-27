import React from "react";
import AuthService from "../services/auth.service";
import { useParams } from "react-router-dom";
import image from "../Images/home.jpeg"
import "../components/Member/Member.css"
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
      <header className="jumbotron">

        <h3>Branch Name: <strong>{currentManager.branch.Branch_Name}</strong></h3>
        <h3>Branch Location: <strong>{currentManager.branch.Branch_Location}</strong></h3>
        <h3>Branch Email: <strong>{currentManager.branch.Branch_Email}</strong></h3>
        <h3>Phone Number: <strong>{currentManager.branch.Branch_Phone_Number}</strong></h3>
        <h3>Manager ID: <strong>{currentManager.branch.Manager_ID}</strong></h3>
        <h3>Manager Name: <strong>{currentManager.branch.Manager_Name}</strong></h3>
        <h3>Manager Email: <strong>{currentManager.branch.Manager_Email}</strong></h3>

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
