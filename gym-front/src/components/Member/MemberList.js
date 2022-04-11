import React, { useState, useEffect } from "react";
import MemberDataService from "D:/dbms_proj/DBMS_Project/gym-front/src/services/MemberService";
import { Link } from "react-router-dom";


const MemberList = () => {
  const [member, setMember] = useState([]);
  const [currentMember, setCurrentMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchMem_Name, setSearchMem_Name] = useState("");

  useEffect(() => {
    retrieveMembers();
  }, []);

  const onChangeSearchMem_Name = e => {
    const searchMem_Name= e.target.value;
    setSearchMem_Name(searchMem_Name);
  };

  const retrieveMembers = () => {
    MemberDataService.getAll()
      .then(response => {
        setMember(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveMembers();
    setCurrentMember(null);
    setCurrentIndex(-1);
  };

  const setActiveMember = (member, index) => {
    setCurrentMember(member);
    setCurrentIndex(index);
  };

  const removeAllMembers = () => {
    MemberDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByMem_Name = () => {
    MemberDataService.findByMem_Name(searchMem_Name)
      .then(response => {
        setMember(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Mem_Name"
            value={searchMem_Name}
            onChange={onChangeSearchMem_Name}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByMem_Name}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Members List</h4>

        <ul className="list-group">
          {member &&
            member.map((member, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => {setActiveMember(member, index)
                console.log(member.Mem_ID)}
                }
                key={index}
              >
                {member.Mem_Name}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllMembers}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentMember ? (
          <div>
            <h4>Members</h4>
            <div>
              <label>
                <strong>Mem_Name:</strong>
              </label>{" "}
              {currentMember.Mem_Name}
              {currentMember.Mem_ID}
            </div>
            <Link
              to={"/member/"+currentMember.Mem_ID}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Member...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberList;
