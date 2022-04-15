import React, { useState } from "react";
import BranchMangerServices from "../services/ManagerService";

const Addbranch_manager = () => {
  const initialbranch_managerState = {
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
  const [branch_manager, setbranch_manager] = useState(initialbranch_managerState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setbranch_manager({ ...branch_manager, [name]: value });
  };

  const savebranch_manager = () => {

    var data = {
        Branch_Name: branch_manager.Branch_Name,
        Branch_Location: branch_manager.Branch_Location,
        Branch_Email: branch_manager.Branch_Email,
        Branch_Phone_Number: branch_manager.Branch_Phone_Number,
        Manager_Name: branch_manager.Manager_Name,
        Gender: branch_manager.Gender,
        Mobile_Number: branch_manager.Mobile_Number,
        Address: branch_manager.Address,
        Manager_Email: branch_manager.Manager_Email,
        Password: branch_manager.Password,
    };
    // console.log(data);

    BranchMangerServices.createBranch(data)
      .then(response => {
        setbranch_manager({
          Branch_ID:response.data.Branch_ID,
          Branch_Name: response.data.Branch_Name,
          Branch_Location: response.data.Branch_Location,
          Branch_Email: response.data.Branch_Email,
          Branch_Phone_Number: response.data.Branch_Phone_Number,
          Manager_Name: response.data.Manager_Name,
          Gender: response.data.Gender,
          Mobile_Number: response.data.Mobile_Number,
          Address: response.data.Address,
          Manager_Email: response.data.Manager_Email,
          Password: response.data.Password,
        });
        console.log(response);
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newbranch_manager = () => {
    setbranch_manager(initialbranch_managerState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newbranch_manager}>
            Add branch_manager
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="Branch_Name">Branch_Name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={branch_manager.Branch_Name}
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
              value={branch_manager.Branch_Location}
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
              value={branch_manager.Branch_Email}
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
              value={branch_manager.Branch_Phone_Number}
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
              value={branch_manager.Manager_Name}
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
              value={branch_manager.Gender}
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
              value={branch_manager.Mobile_Number}
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
              value={branch_manager.Address}
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
              value={branch_manager.Manager_Email}
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
              value={branch_manager.Password}
              onChange={handleInputChange}
              name="Password"
            />
          </div>

          <button onClick={savebranch_manager} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Addbranch_manager;
