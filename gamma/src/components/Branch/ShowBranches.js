import React, { useState, useEffect } from "react";
import BranchServices from "../../services/ManagerService";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import image from "../../Images/home.jpeg"

const Branch_ManagerList = () => {
  const [branch_manager, setBranch_Manager] = useState([]);
  const [currentBranch_Manager, setCurrentBranch_Manager] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchBranch_Name, setSearchBranch_Name] = useState("");

  useEffect(() => {
    retrieveBranch_Managers();
  }, []);

  const onChangeSearchBranch_Name = e => {
    const searchBranch_Name = e.target.value;
    setSearchBranch_Name(searchBranch_Name);
  };

  const retrieveBranch_Managers = () => {
    BranchServices.getAllBranches()
      .then(response => {
        setBranch_Manager(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveBranch_Managers();
    setCurrentBranch_Manager(null);
    setCurrentIndex(-1);
  };

  const setActiveBranch_Manager = (branch_manager, index) => {
    setCurrentBranch_Manager(branch_manager);
    setCurrentIndex(index);
  };

  const removeAllBranch_Managers = () => {
    BranchServices.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByBranch_Name = () => {
    BranchServices.findByBranch_Name(searchBranch_Name)
      .then(response => {
        setBranch_Manager(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row" align="center" >
    <img src={image} id="imgt2" />
      <div className="">
        <div className="input-group mb-3" >
          <input
            type="text"
            className="form-control"
            placeholder="Search by Branch_Name"
            value={searchBranch_Name}
            onChange={onChangeSearchBranch_Name}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByBranch_Name}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="" align="center" margin-left="auto" margin-right="auto" width="50%" vertical-align="center">
        <h4 className="lab">Branch Managers List</h4>
        <br />

        {/* //khushil working */}

        <Table striped bordered hover variant="dark" align="center" dataAlign="center" style={{ background: "black", opacity: "0.8", textAlign: "center", borderRadius: '30px', marginInlineStart: '1rem' }}>
          <thead>
            <tr>

              <th>Branch ID</th>
              <th>Branch Name</th>
              <th>Branch Location</th>
              <th>Branch Email</th>
              <th>Branch Phone Number</th>
              <th>Manager-ID</th>
              <th>Manager Name</th>
              <th>Manager Mobile Number</th>
              <th>Manager Email</th>
              <th>Manager Address</th>

            </tr>
          </thead>

          {branch_manager.map((branch_manager, index) => (
            <tr>
              <td>{branch_manager.Branch_ID}</td>
              <td>{branch_manager.Branch_Name}</td>
              <td>{branch_manager.Branch_Location}</td>
              <td>{branch_manager.Branch_Email}</td>
              <td>{branch_manager.Branch_Phone_Number}</td>
              <td>{branch_manager.Manager_ID}</td>
              <td>{branch_manager.Manager_Name}</td>
              <td>{branch_manager.Manager_Mobile_Number}</td>
              <td>{branch_manager.Manager_Email}</td>
              <td>{branch_manager.Manager_Address}</td>

              <td>
                <Link
                  to={"/branch_manager/" + branch_manager.Branch_ID}
                  className="badge badge_warning">Edit</Link>
              </td>
              <td>{/*<button className="m-3 btn-sm btn-danger" onClick={() => { deleteBranch(branch_manager.Branch_ID) }}>Delete</button>*/}</td>
            </tr>
          ))}
        </Table>
        {/* <ul className="list-group">
          {branch_manager &&
            branch_manager.map((branch_manager, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => {setActiveBranch_Manager(branch_manager, index)
                console.log(branch_manager)}
                }
                key={index}
              >
                {branch_manager.Branch_Name}
              </li>
            ))}
        </ul> */}

        {/* <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllBranch_Managers}
        >
          Remove All
        </button>
      </div> */}
        {/* <div className="col-md-6"> */}
        {/* {currentBranch_Manager ? (
          <div>
            <h4>Branch_Managers</h4>
            <div>
              <label>
                <strong>Branch_Name:</strong>
              </label>{" "}
              {currentBranch_Manager.Branch_Name}
              {currentBranch_Manager.Branch_ID}
            </div>
            <Link
              to={"/editbranch/" + currentBranch_Manager.Branch_ID}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Branch_Manager...</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Branch_ManagerList;
