import React, { useState, useEffect } from "react";
import Branch_ManagerDataService from "../../services/Branch_ManagerService";
import { Link } from "react-router-dom";


const Branch_ManagerList = () => {
  const [branch_manager, setBranch_Manager] = useState([]);
  const [currentBranch_Manager, setCurrentBranch_Manager] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchMem_Name, setSearchMem_Name] = useState("");

  useEffect(() => {
    retrieveBranch_Managers();
  }, []);

  const onChangeSearchMem_Name = e => {
    const searchMem_Name = e.target.value;
    setSearchMem_Name(searchMem_Name);
  };

  const retrieveBranch_Managers = () => {
    Branch_ManagerDataService.getAll()
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
    Branch_ManagerDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByMem_Name = () => {
    Branch_ManagerDataService.findByMem_Name(searchMem_Name)
      .then(response => {
        setBranch_Manager(response.data);
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
        <h4>Branch_Managers List</h4>

        <ul className="list-group">
          {branch_manager &&
            branch_manager.map((branch_manager, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => {
                  setActiveBranch_Manager(branch_manager, index)
                  console.log(branch_manager.Mem_ID)
                }
                }
                key={index}
              >
                {branch_manager.Mem_Name}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllBranch_Managers}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentBranch_Manager ? (
          <div>
            <h4>Branch_Managers</h4>
            <div>
              <label>
                <strong>Mem_Name:</strong>
              </label>{" "}
              {currentBranch_Manager.Mem_Name}
              {currentBranch_Manager.Mem_ID}
            </div>
            <Link
              to={"/branch_manager/" + currentBranch_Manager.Mem_ID}
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
        )}
      </div>
    </div>
  );
};

export default Branch_ManagerList;
