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
    <div>
      <br />
      <br />
      <br />
      <br />
      <img src={image} id="imgt2" />
      <table class = "prof">
        <tbody>
          <tr>
            <td class="prof2">Branch Name: </td>
            <td>{currentManager.branch.Branch_Name}</td>
          </tr>
          <tr>
            <td>Branch Location: </td>
            <td>{currentManager.branch.Branch_Location}</td>
          </tr>
          <tr>
            <td>Branch Email: </td>
            <td>{currentManager.branch.Branch_Email}</td>
          </tr>
          <tr>
            <td>Phone Number: </td>
            <td>{currentManager.branch.Branch_Phone_Number}</td>
          </tr>
          <tr>
            <td>Manager ID: </td> 
            <td>{currentManager.branch.Manager_ID}</td>
          </tr>
          <tr>
            <td>Manager Name: </td>
            <td>{currentManager.branch.Manager_Name}</td>
          </tr>
          <tr>
            <td>Manager Email: </td>
            <td>{currentManager.branch.Manager_Email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
