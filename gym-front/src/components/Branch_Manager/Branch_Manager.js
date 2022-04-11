import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Branch_ManagerDataService from "../../services/Branch_ManagerService";

const Branch_Manager = props => {
  const { Branch_ID } = useParams();
  const {id} = useParams();
// console.log(useParams());
// console.log(id);
console.log(Branch_ID);
  let navigate = useNavigate();
  // console.log(Branch_ID);
  const initialBranch_ManagerState = {
    Branch_ID:null,
    Branch_Name: "",
    Branch_Location: "",
    Branch_Email: "",
    Branch_Phone_Number: 0,
    Manager_Name: "",
    Gender: "",
    Mobile_Number: 0,
    Address: "",
    Manager_Email: "",
    Password: ""
  };
  const [currentBranch_Manager, setCurrentBranch_Manager] = useState(initialBranch_ManagerState);
  const [message, setMessage] = useState("");

  const getBranch_Manager = Branch_ID => {
    Branch_ManagerDataService.get(Branch_ID)
      .then(response => {
        setCurrentBranch_Manager(response.data);
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (Branch_ID)
      getBranch_Manager(Branch_ID);
  }, [Branch_ID]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBranch_Manager({ ...currentBranch_Manager, [name]: value });
  };

  const updatePublished = status => {
    console.log(currentBranch_Manager);
    var data = {
      
      Branch_ID:currentBranch_Manager.Branch_ID,
      Branch_Name:currentBranch_Manager.Branch_Name ,
      Branch_Location:currentBranch_Manager.Branch_Location,
      Branch_Email:currentBranch_Manager.Branch_Email,
      Branch_Phone_Number:currentBranch_Manager.Branch_Phone_Number,
      Manager_Name:currentBranch_Manager.Manager_Name,
      Gender:currentBranch_Manager.Gender,
      Mobile_Number:currentBranch_Manager.Mobile_Number,
      Address:currentBranch_Manager.Address,
      Manager_Email:currentBranch_Manager.Manager_Email,
      Password:currentBranch_Manager.Password
    };

    Branch_ManagerDataService.update(currentBranch_Manager.Branch_ID, data)
      .then(response => {
        setCurrentBranch_Manager({ ...currentBranch_Manager, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateBranch_Manager = () => {
    Branch_ManagerDataService.update(currentBranch_Manager.Branch_ID, currentBranch_Manager)
      .then(response => {
        console.log(response.data);
        setMessage("The Branch_Manager was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteBranch_Manager = () => {
    Branch_ManagerDataService.remove(currentBranch_Manager.Branch_ID)
      .then(response => {
        console.log(response.data);
        navigate("/branch_manager");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentBranch_Manager ? (
        <div className="edit-form">
          <h4>Branch_Manager</h4>
          <form>


          <div className="form-group">
          <label htmlFor="Branch_Name">Branch_Name</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={currentBranch_Manager.Branch_Name}
            onChange={handleInputChange}
            name="Branch_Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Branch_Location">Branch_Location</label>
          <input
            type="text"
            className="form-control"
            id="Branch_Location"
            required
            value={currentBranch_Manager.Branch_Location}
            onChange={handleInputChange}
            name="Branch_Location"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="Branch_Email">Branch_Email</label>
          <input
            type="text"
            className="form-control"
            id="Branch_Email"
            required
            value={currentBranch_Manager.Branch_Email}
            onChange={handleInputChange}
            name="Branch_Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Branch_Phone_Number">Branch_Phone_Number</label>
          <input
            type="number"
            className="form-control"
            id="Branch_Phone_Number"
            required
            value={currentBranch_Manager.Branch_Phone_Number}
            onChange={handleInputChange}
            name="Branch_Phone_Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Manager_Name">Manager_Name</label>
          <input
            type="text"
            className="form-control"
            id="Manager_Name"
            required
            value={currentBranch_Manager.Manager_Name}
            onChange={handleInputChange}
            name="Manager_Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Gender">Gender</label>
          <input
            type="text"
            className="form-control"
            id="Gender"
            required
            value={currentBranch_Manager.Gender}
            onChange={handleInputChange}
            name="Gender"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Mobile_Number">Mobile_Number</label>
          <input
            type="number"
            className="form-control"
            id="Mobile_Number"
            required
            value={currentBranch_Manager.Mobile_Number}
            onChange={handleInputChange}
            name="Mobile_Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            className="form-control"
            id="Address"
            required
            value={currentBranch_Manager.Address}
            onChange={handleInputChange}
            name="Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Manager_Email">Manager_Email</label>
          <input
            type="text"
            className="form-control"
            id="Manager_Email"
            required
            value={currentBranch_Manager.Manager_Email}
            onChange={handleInputChange}
            name="Manager_Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="number"
            className="form-control"
            id="Password"
            required
            value={currentBranch_Manager.Password}
            onChange={handleInputChange}
            name="Password"
          />
        </div>


          </form>



          <button className="badge badge-danger mr-2" onClick={deleteBranch_Manager}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateBranch_Manager}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Branch_Manager...</p>
        </div>
      )}
    </div>
  );
};

export default Branch_Manager;
