import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BranchServices from "../../services/ManagerService";
import image from "../../Images/home.jpeg"
import image2 from "../../Images/branch.png"
import "../Member/Member.css";
import { Card } from "react-bootstrap";
const Branch = props => {
    
    console.log(useParams());
  const { id } = useParams();
//  BranchServices.get(Branch_ID).then(response=>console.log(response));
//   const {id}=useParams();
  
//   const { id } = useParams();
  // console.log(useParams());
//    console.log(id);
  console.log(id);
  let navigate = useNavigate();
  // console.log(Branch_ID);
  const initialBranchState = {
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
  const [currentBranch, setCurrentBranch] = useState(initialBranchState);
  const [message, setMessage] = useState("");

  const getBranch = id => {
    BranchServices.getBranch(id)
      .then(response => {
        console.log(response.data);
        setCurrentBranch(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getBranch(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBranch({ ...currentBranch, [name]: value });
  };

  const updatePublished = status => {
    var data = {
        Branch_Name:currentBranch.Branch_Name,
        Branch_DietChart:currentBranch.Branch_DietChart,
        Working_Duration:currentBranch.Working_Duration

    };

    BranchServices.updateBranch(currentBranch.Branch_ID, data)
      .then(response => {
        setCurrentBranch({ ...currentBranch, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateBranch = () => {

    if(window.confirm("Confirm Update?")){
    BranchServices.updateBranch(currentBranch.Branch_ID, currentBranch)
      .then(response => {
        console.log(response.data);
        setMessage("The Branch was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
    }
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
              value={currentBranch.Branch_Name}
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
              value={currentBranch.Branch_Location}
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
              value={currentBranch.Branch_Email}
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
              value={currentBranch.Branch_Phone_Number}
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
              value={currentBranch.Manager_Name}
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
              value={currentBranch.Gender}
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
              value={currentBranch.Mobile_Number}
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
              value={currentBranch.Address}
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
              value={currentBranch.Manager_Email}
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
              value={currentBranch.Password}
              onChange={handleInputChange}
              name="Password"
            />
          </div>
          <br />
          <button onClick={updateBranch} className="btn btn-outline-info tempBtn">
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

export default Branch;
