import React, { useState } from "react";
import BranchMangerServices from "../../services/ManagerService";
import image from "../../Images/home.jpeg"
import image2 from "../../Images/branch.png"
import "../Member/Member.css";
import { Card } from "react-bootstrap";

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


    if(window.confirm("Want to submit?")){
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
        setbranch_manager(initialbranch_managerState);
        window.location.reload();
      }
  };
  const newbranch_manager = () => {
    setbranch_manager(initialbranch_managerState);
    setSubmitted(false);
  };

  return (
    <div>
    <img src={image} id="imgt2" />
    <div className="member-submit-form" id="member" >
    <br />
    <Card style={{ height: '60rem', width: '50rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '0', background: 'transparent', borderColor: 'transparent' }}>
    <div className="submit-form">
        <div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Branch_Name">Branch Name</label>
            <input
              type="text"
              className="form-control int"
              id="title"
              required
              value={branch_manager.Branch_Name}
              onChange={handleInputChange}
              name="Branch_Name"
            />
          </div>

          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Branch_Location">Branch Location</label>
            <input
              type="text"
              className="form-control int"
              id="Branch_Location"
              required
              value={branch_manager.Branch_Location}
              onChange={handleInputChange}
              name="Branch_Location"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Branch_Email">Branch Email</label>
            <input
              type="text"
              className="form-control int"
              id="Branch_Email"
              required
              value={branch_manager.Branch_Email}
              onChange={handleInputChange}
              name="Branch_Email"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Branch_Phone_Number">Branch Phone Number</label>
            <input
              type="number"
              className="form-control int"
              id="Branch_Phone_Number"
              required
              value={branch_manager.Branch_Phone_Number}
              onChange={handleInputChange}
              name="Branch_Phone_Number"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Manager_Name">Manager Name</label>
            <input
              type="text"
              className="form-control int"
              id="Manager_Name"
              required
              value={branch_manager.Manager_Name}
              onChange={handleInputChange}
              name="Manager_Name"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Gender">Gender</label>
            <input
              type="text"
              className="form-control int"
              id="Gender"
              required
              value={branch_manager.Gender}
              onChange={handleInputChange}
              name="Gender"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Mobile_Number">Mobile Number</label>
            <input
              type="number"
              className="form-control int"
              id="Mobile_Number"
              required
              value={branch_manager.Mobile_Number}
              onChange={handleInputChange}
              name="Mobile_Number"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Address">Address</label>
            <input
              type="text"
              className="form-control int"
              id="Address"
              required
              value={branch_manager.Address}
              onChange={handleInputChange}
              name="Address"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Manager_Email">Manager Email</label>
            <input
              type="text"
              className="form-control int"
              id="Manager_Email"
              required
              value={branch_manager.Manager_Email}
              onChange={handleInputChange}
              name="Manager_Email"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Password">Password</label>
            <input
              type="number"
              className="form-control int"
              id="Password"
              required
              value={branch_manager.Password}
              onChange={handleInputChange}
              name="Password"
            />
          </div>
          <br />
          <button onClick={savebranch_manager} className="btn btn-outline-info tempBtn">
            Submit
          </button>
        </div>
    </div>
    </Card>
  </div>
  <img src={image2} id="imgt3" />
  </div>
  );
};

export default Addbranch_manager;
