import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
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
import Payment from "./components/Payment";
import EventBus from "./common/EventBus";
import ShowPayment from "./components/ShowPayment";
import AddEquipment from "./components/AddEquipment";
import AddTrainer from "./components/AddTrainer";
import ShowEquipment from "./components/ShowEquipment";
import ShowTrainer from "./components/ShowTrainer";
import AddWorkout from "./components/AddWorkout";
import ShowWorkout from "./components/ShowWorkout";
import AddBranches from "./components/AddBranch";
import ShowBranches from "./components/ShowBranches";
import EditWorkout from "./components/EditWorkout";
import EditBranch from "./components/EditBranch";
const App = () => {
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
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
   const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentManager, setCurrentManager] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentManager();
    // console.log(user);
    //const {id} = user;
    //console.log(id);

    if (user) {
      console.log(user.role);
      if (user.role==="admin") {
        setShowAdminBoard(true);
        
      }
      else{
      setCurrentManager(user);
      }
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
       
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
    // setShowModeratorBoard(false);
     setShowAdminBoard(false);
    setCurrentManager(undefined);
  };
  console.log(currentManager);
  
  

  return (
    
    
    <div>
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      "fullScreen": {
        "enable": true,
        "zIndex": 0.5
      },
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 1,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 30,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "events": {
          "onHover": {
            "enable": true,
            "mode": "bubble",
            "parallax": {
              "enable": false,
              "force": 60,
              "smooth": 10
            }
          },
          "onClick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "lineLinked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 100,
            "duration": 2,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "backgroundMask": {
        "enable": true,
        "cover": {
          "value": {
            "r": 255,
            "g": 255,
            "b": 255
          }
        }
      },
      "retina_detect": true,
      "background": {
        "color": "#ffffff",
        "image": "url('https://particles.js.org/images/background3.jpg')",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
      }
    }}
  />
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
            currentManager && (
              <li className="nav-item">
            <Link to={"/addmember/"+currentManager.id} className="nav-link">
            Add Member
            </Link>
            </li>
           )
        }
        {
          currentManager&&(
            
            <li className="nav-item">
            <Link to={"/showmembers/"+currentManager.id} className="nav-link">
            Show Members
            </Link>
            </li>
           
           
          )
        }
        {
          currentManager&&(
          
            <li className="nav-item">
            <Link to={"/payment/"+currentManager.id} className="nav-link">
            Add Payment
            </Link>
            </li>             
          )
      }
        {
          currentManager&&(
            <li className="nav-item">
            <Link to={"/showpayment/"+currentManager.id} className="nav-link">
            Show Payments
            </Link>
            </li>
          )
        }
        
        {
          currentManager&&(
            <li className="nav-item">
            <Link to={"/addtrainer/"+currentManager.id} className="nav-link">
            Add Trainer
            </Link>
            </li>
          )
        }
        {
          currentManager&&(
            <li className="nav-item">
            <Link to={"/showtrainer/"+currentManager.id} className="nav-link">
            Show Trainer
            </Link>
            </li>
          )
        }
        {
          showAdminBoard&&(
            <li className="nav-item">
            <Link to={"/addworkout"} className="nav-link">
            Add Workout
            </Link>
            </li>
          )
        }
        {
          showAdminBoard&&(
            <li className="nav-item">
            <Link to={"/showworkout"} className="nav-link">
            Show Workout
            </Link>
            </li>
          )
        }
        {
          currentManager&&(
            <li className="nav-item">
            <Link to={"/addequipment/"+currentManager.id} className="nav-link">
            Add Equipment
            </Link>
            </li>
          )
        }
        {
          currentManager&&(
            <li className="nav-item">
            <Link to={"/showequipment/"+currentManager.id} className="nav-link">
            Show Equipment
            </Link>
            </li>
          )
        }
        {
          showAdminBoard&&(
            <li className="nav-item">
            <Link to={"/addbranch"} className="nav-link">
            Add Branch
            </Link>
            </li>
          )
        }
        {
          showAdminBoard&&(
            <li className="nav-item">
            <Link to={"/showbranch"} className="nav-link">
            Show Branches
            </Link>
            </li>
          )
        }
        

        </div>

        {currentManager||showAdminBoard ? (
          <div className="navbar-nav ml-auto">
            {
            //   <li className="nav-item">
            //   <Link to={"/profile/"+currentManager.id} className="nav-link">
            //     {currentManager.id}
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
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="showpayment/:id" element={<ShowPayment />} />
          <Route path="addequipment/:id" element={<AddEquipment />} />
          <Route path="showequipment/:id" element={<ShowEquipment />} />
          <Route path="addtrainer/:id" element={<AddTrainer />} />
          <Route path="showtrainer/:id" element={<ShowTrainer />} />
          <Route path="showworkout" element={<ShowWorkout/>} />
          <Route path="addworkout" element={<AddWorkout />} />
          <Route path="/showbranch" element={<ShowBranches />} />
          <Route path="addbranch" element={<AddBranches />} />
          <Route path="editworkout/:id" element={<EditWorkout />} />
          <Route path="editbranch/:id" element={<EditBranch />} />
              <Route path="/showmembers/:id" element={<ShowMembers />} />
            
          
        </Routes>
      </div>

    </div>
        
  );
};

export default App;
