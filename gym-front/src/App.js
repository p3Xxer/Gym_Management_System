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
import { Dropdown, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import EditTrainer from "./components/Trainer/EditTrainer";
import EditEquipment from "./components/Equipment/EditEquipment";
import { useNavigate } from "react-router-dom";
const App = () => {
  let navigate = useNavigate();
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
      if (user.role === "admin") {
        setShowAdminBoard(true);

      }
      else {
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
      <Navbar variant="dark" expand="lg" className="Navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              {
                //   <Link to={"/"} className="navbar-brand">
                //   Profile
                // </Link>
              }
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link" >
                    HOME
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
                {currentManager && (<NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Member"
                  style={{ marginLeft: '56rem' }}
                  menuVariant="dark"

                >

                  <NavDropdown.Item href={"/addmember/" + currentManager.id}>

                    Add Member

                  </NavDropdown.Item>
                  <NavDropdown.Item href={"/showmembers/" + currentManager.id}>


                    Show Members

                  </NavDropdown.Item>
                </NavDropdown>



                )}
                
                {
                  currentManager && (
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Payment"
                      menuVariant="dark"

                    >


                      <NavDropdown.Item href={/payment/ + currentManager.id}>
                        Add Payment
                      </NavDropdown.Item>
                      <NavDropdown.Item href={"/showpayment/" + currentManager.id}>


                        Show Payments

                      </NavDropdown.Item>
                    </NavDropdown>
                  )}

                {
                  currentManager && (
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Trainer"
                      menuVariant="dark">
                      <NavDropdown.Item href={"/addtrainer/" + currentManager.id}>
                        Add Trainer
                      </NavDropdown.Item>
                      <NavDropdown.Item href={"/showtrainer/" + currentManager.id}>
                        Show Trainer
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                {
                  showAdminBoard && (
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Workout"
                      style={{ marginLeft: '1150px' }}
                      menuVariant="dark"
                    >

                      <NavDropdown.Item href={"/addworkout"} >
                        Add Workout
                      </NavDropdown.Item>
                      <NavDropdown.Item href={"/showworkout"}>

                        Show Workout
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                {
                  currentManager && (
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Equipment"
                      menuVariant="dark"
                    >

                      <NavDropdown.Item href={"/addequipment/" + currentManager.id} >
                        Add Equipment
                      </NavDropdown.Item>
                      <NavDropdown.Item href={"/showequipment/" + currentManager.id} >
                        Show Equipment
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                {
                  showAdminBoard && (
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Branch"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item href={"/addbranch"}>
                        Add Branch
                      </NavDropdown.Item>
                      <NavDropdown.Item href={"/showbranch"} >

                        Show Branches
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}

                  {currentManager&&(
                    <div>
                    <li className="nav-item">
                    <a href={"/profile/" + currentManager.id} className="nav-link"  >
                      Profile
                    </a>
                  </li>
                </div>

                  )}

              </div>

              {currentManager || showAdminBoard ? (
                <div >
                  {
                    //   <li className="nav-item">
                    //   <Link to={"/profile/"+currentManager.id} className="nav-link">
                    //     {currentManager.id}
                    //   </Link>
                    // </li>
                  }
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={logOut} >
                      LOGOUT
                    </a>
                  </li>
                </div>
              ) : (
                <div >
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link" style={{ paddingLeft: '1350px' }}>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />

        </Routes>
        {currentManager || showAdminBoard ? (<Routes>
          <Route path="/addmember/:id" element={<AddMember />} />
          <Route path="edittrainer/:id" element={<EditTrainer />} />
          <Route path="editequipment/:id" element={<EditEquipment />} />
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
          <Route path="/profile/:id" element={<Profile />} />

        </Routes>) :
          <Routes>
            <Route path="/addmember/:id" element={<Home />} />
            <Route path="edittrainer/:id" element={<Home />} />
            <Route path="editequipment/:id" element={<Home />} />
            <Route path="/editmember/:Mem_ID" element={<Home />} />
            <Route path="/payment/:id" element={<Home />} />
            <Route path="showpayment/:id" element={<Home />} />
            <Route path="addequipment/:id" element={<Home />} />
            <Route path="showequipment/:id" element={<Home />} />
            <Route path="addtrainer/:id" element={<Home />} />
            <Route path="showtrainer/:id" element={<Home />} />
            <Route path="showworkout" element={<Home />} />
            <Route path="addworkout" element={<Home />} />
            <Route path="/showbranch" element={<Home />} />
            <Route path="addbranch" element={<Home />} />
            <Route path="editworkout/:id" element={<Home />} />
            <Route path="editbranch/:id" element={<Home />} />
            <Route path="/showmembers/:id" element={<Home />} />
            <Route path="/branch_manager/:id" element={<Home />} />
            <Route path="/profile/:id" element={<Home />} />
          </Routes>

        }
      </div>
    </div>
  );
};

export default App;