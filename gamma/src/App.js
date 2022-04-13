import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddMember from "./components/AddMember";
import EditMember from "./components/Member";
import AuthService from "./services/auth.service";
import ShowMembers from "./components/ShowMembers";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import EventBus from "./common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    // console.log(user);
    //const {id} = user;
    //console.log(id);

    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };
  console.log(currentUser);
  
  

  return (
    
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        {
        //   <Link to={"/"} className="navbar-brand">
        //   Profile
        // </Link>
      }
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {
          //   showModeratorBoard && (
          //   <li className="nav-item">
          //     <Link to={"/mod"} className="nav-link">
          //       Moderator Board
          //     </Link>
          //   </li>
          // )
        }

          {
          //   showAdminBoard && (
          //   <li className="nav-item">
          //     <Link to={"/admin"} className="nav-link">
          //       Admin Board
          //     </Link>
          //   </li>
          // )
        }
        {
          currentUser&&(
            
            <li className="nav-item">
            <Link to={"/showmembers/"+currentUser.id} className="nav-link">
            Show Members
            </Link>
            </li>
           
           
          )
        }

          {
             currentUser && (
              <li className="nav-item">
            <Link to={"/addmember/"+currentUser.id} className="nav-link">
            Add Member
            </Link>
            </li>
           )
        }
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            {
            //   <li className="nav-item">
            //   <Link to={"/profile/"+currentUser.id} className="nav-link">
            //     {currentUser.id}
            //   </Link>
            // </li>
          }
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            {
            //   <li className="nav-item">
            //   <Link to={"/register"} className="nav-link">
            //     Sign Up
            //   </Link>
            // </li>
          }
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
          <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<BoardAdmin/>} />
          <Route path="/addmember/:id" element={<AddMember />} />
          <Route path="/editmember/:Mem_ID" element={<EditMember />} />
            
              <Route path="/showmembers/:id" element={<ShowMembers />} />
            
          
        </Routes>
      </div>

    </div>
        
  );
};

export default App;
