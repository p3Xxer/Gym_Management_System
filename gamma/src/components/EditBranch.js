import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BranchServices from "../services/ManagerService";

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
    BranchServices.updateBranch(currentBranch.Branch_ID, currentBranch)
      .then(response => {
        console.log(response.data);
        setMessage("The Branch was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

//   const deleteBranch = () => {
//     BranchServices.remove(currentBranch.Branch_ID)
//       .then(response => {
//         console.log(response.data);
//         navigate("/branch");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
console.log(currentBranch);
  return (
    <div>
      {currentBranch ? (
        <div className="edit-form">
          <h4>Branch</h4>
          <form>


          
          <div className="form-group">
            <label htmlFor="Branch_Name">Branch_Name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={currentBranch.Branch_Name}
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
              value={currentBranch.Branch_Location}
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
              value={currentBranch.Branch_Email}
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
              value={currentBranch.Branch_Phone_Number}
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
              value={currentBranch.Manager_Name}
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
              value={currentBranch.Gender}
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
              value={currentBranch.Mobile_Number}
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
              value={currentBranch.Address}
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
              value={currentBranch.Manager_Email}
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
              value={currentBranch.Password}
              onChange={handleInputChange}
              name="Password"
            />
          </div>
           


          </form>



         { 
        //      <button className="badge badge-danger mr-2" onClick={deleteBranch}>
        //     Delete
        //   </button>
        }

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateBranch}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Branch...</p>
        </div>
      )}
    </div>
  );
};

export default Branch;
