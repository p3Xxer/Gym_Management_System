import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddMember from "./components/Member/AddMember";
import Member from "./components//Member/Member";
import MemberList from "./components/Member/MemberList";
import AddBranch_Manager from "./components/Branch_Manager/AddBranch_Manager"

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/member" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/member"} className="nav-link">
              Members
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addmember"} className="nav-link">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addbranch"} className="nav-link">
              Add Branch_Manager
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<MemberList/>} />
          <Route path="/member" element={<MemberList/>} />
          <Route path="/addmember" element={<AddMember/>} />
          <Route path="/member/:Mem_ID" element={<Member/>} />
          <Route path="/addbranch" element={<AddBranch_Manager/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
