import React, { useState, useEffect } from "react";
import BranchServices from "../../services/ManagerService";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import image from "../../Images/home.jpeg"
import "../table.css"
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
  const deleteBranch=(Branch_ID) => {
    if(window.confirm("Do you want to delete this entry?")){
    BranchServices.removeBranch(Branch_ID)
      .then(response => {
        console.log(response.data);
        refreshList();
      })
    }
  }

  return (
    <div className="list row" align="center" >
      <div className="" align="center" margin-left="auto" margin-right="auto" width="50%" vertical-align="center">
        <h4 className="lab">BRANCH MANAGERS LIST</h4>
        <br />

        <Table striped class="table" bordered hover variant="dark" align="center" dataAlign="center" style={{ background: "black", opacity: "0.8", textAlign: "center", borderRadius: '30px', marginInlineStart: '1rem' }}>
          <thead class="thead-primary">
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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {branch_manager.map((branch_manager, index) => (
            <tr>
              <td>{branch_manager.Branch_ID}</td>
              <td>{branch_manager.Branch_Name}</td>
              <td>{branch_manager.Branch_Location}</td>
              <td>{branch_manager.Branch_Email}</td>
              <td>{branch_manager.Branch_Phone_Number}</td>
              <td>{branch_manager.Manager_ID}</td>
              <td>{branch_manager.Manager_Name}</td>
              <td>{branch_manager.Mobile_Number}</td>
              <td>{branch_manager.Manager_Email}</td>
              <td>{branch_manager.Address}</td>

              <td>
                <Link
                  to={"/branch_manager/" + branch_manager.Branch_ID}
                  className="btn btn-primary pqy">Edit</Link>
              </td>
              <td><button className="btn-danger btn btn-primary pqy" onClick={() => { deleteBranch(branch_manager.Branch_ID) }}>Delete</button></td>
            </tr>
          ))}
          </tbody>
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
      <img src={image} id="imgt2" />
    </div>
  );
};

export default Branch_ManagerList;
