import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddMember from "./components/AddMember";
import Member from "./components/Member";
import MemberList from "./components/MemberList";

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
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<MemberList/>} />
          <Route path="/member" element={<MemberList/>} />
          <Route path="/add" element={<AddMember/>} />
          <Route path="/member/:Mem_ID" element={<Member/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
