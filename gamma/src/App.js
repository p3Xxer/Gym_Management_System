import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AddMember from "./components/Member/AddMember";
import EditMember from "./components/Member/Member";
import AuthService from "./services/auth.service";
import ShowMembers from "./components/Member/ShowMembers";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import Payment from "./components/Payment/Payment";
import EventBus from "./common/EventBus";
import ShowPayment from "./components/Payment/ShowPayment";
import AddEquipment from "./components/Equipment/AddEquipment";
import AddTrainer from "./components/Trainer/AddTrainer";
import ShowEquipment from "./components/Equipment/ShowEquipment";
import ShowTrainer from "./components/Trainer/ShowTrainer";
import AddWorkout from "./components/Workout/AddWorkout";
import ShowWorkout from "./components/Workout/ShowWorkout";
import AddBranches from "./components/Branch/AddBranch";
import ShowBranches from "./components/Branch/ShowBranches";
import EditWorkout from "./components/Workout/EditWorkout";
import EditBranch from "./components/Branch/EditBranch";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import EditTrainer from "./components/Trainer/EditTrainer";
import EditEquipment from "./components/Equipment/EditEquipment";
const App = () => {
  const [showDropdownMem, setShowDropdownMem] = useState(false);
  const [showDropdownPay, setShowDropdownPay] = useState(false);
  const [showDropdownTrain, setShowDropdownTrain] = useState(false);
  const [showDropdownEquip, setShowDropdownEquip] = useState(false);
  const [showDropdownBranch, setShowDropdownBranch] = useState(false);
  const [showDropdownWor, setShowDropdownWor] = useState(false);
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
          {currentManager && (<Dropdown
              onMouseLeave={() => setShowDropdownMem(false)}
              onMouseOver={() => setShowDropdownMem(true)}
              style={{ width: "166px" }}
            >
              <Dropdown.Toggle className="main-style" id="dropdown-basic">
                Member
              </Dropdown.Toggle>
              <Dropdown.Menu show={showDropdownMem}>
                <Dropdown.Item>
                  <Link
                    to={"/addmember/" + currentManager.id}
                    className="nav-link"
                  >
                    Add Member
                  </Link>
                </Dropdown.Item>
                <DropdownItem>
                  {" "}
                  <Link
                    to={"/showmembers/" + currentManager.id}
                    className="nav-link"
                  >
                    Show Members
                  </Link>
                </DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {
            currentManager && (
            <Dropdown
              onMouseLeave={() => setShowDropdownPay(false)}
              onMouseOver={() => setShowDropdownPay(true)}
              style={{ width: "166px" }}
            >
              <Dropdown.Toggle className="main-style" id="dropdown-basic">
                Payment
              </Dropdown.Toggle>
              <Dropdown.Menu show={showDropdownPay}>
                <Dropdown.Item>
                <Link to={"/payment/" + currentManager.id} className="nav-link">
                Add Payment
              </Link>
                </Dropdown.Item>
                <DropdownItem>
                  
                <Link
                to={"/showpayment/" + currentManager.id}
                className="nav-link"
              >
                Show Payments
              </Link>
                </DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
          )}

          {
            currentManager && (
            <Dropdown
              onMouseLeave={() => setShowDropdownTrain(false)}
              onMouseOver={() => setShowDropdownTrain(true)}
              style={{ width: "166px" }}
            >
              <Dropdown.Toggle className="main-style" id="dropdown-basic">
                Trainer
              </Dropdown.Toggle>
              <Dropdown.Menu show={showDropdownTrain}>
                <Dropdown.Item>
                <Link
                to={"/addtrainer/" + currentManager.id}
                className="nav-link"
              >
                Add Trainer
              </Link>
                </Dropdown.Item>
                <DropdownItem>
                  
                <Link
                to={"/showtrainer/" + currentManager.id}
                className="nav-link"
              >
                Show Trainer
              </Link>
                </DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {
            showAdminBoard && (
            <Dropdown
              onMouseLeave={() => setShowDropdownWor(false)}
              onMouseOver={() => setShowDropdownWor(true)}
              style={{ width: "166px" }}
            >
              <Dropdown.Toggle className="main-style" id="dropdown-basic">
                Workout
              </Dropdown.Toggle>
              <Dropdown.Menu show={showDropdownWor}>
                <Dropdown.Item>
                <Link to={"/addworkout"} className="nav-link">
                Add Workout
              </Link>
                </Dropdown.Item>
                <DropdownItem>
                  
                <Link to={"/showworkout"} className="nav-link">
                Show Workout
              </Link>
                </DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {
            currentManager && (
            <Dropdown
              onMouseLeave={() => setShowDropdownEquip(false)}
              onMouseOver={() => setShowDropdownEquip(true)}
              style={{ width: "166px" }}
            >
              <Dropdown.Toggle className="main-style" id="dropdown-basic">
                Equipment
              </Dropdown.Toggle>
              <Dropdown.Menu show={showDropdownEquip}>
                <Dropdown.Item>
                <Link
                to={"/addequipment/" + currentManager.id}
                className="nav-link"
              >
                Add Equipment
              </Link>
                </Dropdown.Item>
                <DropdownItem>
                  
                <Link
                to={"/showequipment/" + currentManager.id}
                className="nav-link"
              >
                Show Equipment
              </Link>
                </DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {
            showAdminBoard && (
            <Dropdown
              onMouseLeave={() => setShowDropdownBranch(false)}
              onMouseOver={() => setShowDropdownBranch(true)}
              style={{ width: "166px" }}
            >
              <Dropdown.Toggle className="main-style" id="dropdown-basic">
                Branch
              </Dropdown.Toggle>
              <Dropdown.Menu show={showDropdownBranch}>
                <Dropdown.Item>
                <Link to={"/addbranch"} className="nav-link">
                Add Branch
              </Link>
                </Dropdown.Item>
                <DropdownItem>
                  
                <Link to={"/showbranch"} className="nav-link">
                Show Branches
              </Link>
                </DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
          )}
          
         
        </div>

        {currentManager || showAdminBoard ? (
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
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/addmember/:id" element={<AddMember />} />
          <Route path="/editmember/:Mem_ID" element={<EditMember />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="showpayment/:id" element={<ShowPayment />} />
          <Route path="addequipment/:id" element={<AddEquipment />} />
          <Route path="showequipment/:id" element={<ShowEquipment />} />
          <Route path="addtrainer/:id" element={<AddTrainer />} />
          <Route path="showtrainer/:id" element={<ShowTrainer />} />
          <Route path="showworkout" element={<ShowWorkout />} />
          <Route path="addworkout" element={<AddWorkout />} />
          <Route path="/showbranch" element={<ShowBranches />} />
          <Route path="addbranch" element={<AddBranches />} />
          <Route path="editworkout/:id" element={<EditWorkout />} />
          <Route path="editbranch/:id" element={<EditBranch />} />
          <Route path="/showmembers/:id" element={<ShowMembers />} />
          <Route path="/branch_manager/:id" element={<EditBranch />} />
          <Route path="edittrainer/:id" element={<EditTrainer />} />
          <Route path="editequipment/:id" element={<EditEquipment />} />

        </Routes>
      </div>
    </div>
  );
};

export default App;
