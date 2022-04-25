import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ManagerDataService from "../../services/ManagerService";
import "./Member.css";
import image from "../../Images/home.jpg"
import { Card } from "react-bootstrap";

const Member = props => {
    
    console.log(useParams());
  const { Mem_ID } = useParams();
//  ManagerDataService.get(Mem_ID).then(response=>console.log(response));
//   const {id}=useParams();
  
//   const { id } = useParams();
  // console.log(useParams());
//    console.log(id);
  console.log(Mem_ID);
  let navigate = useNavigate();
  // console.log(Mem_ID);
  const initialMemberState = {
    Mem_ID: null,
    Mem_Name: "",
    Mem_Weight: 0,
    Mem_Height: 0,
    Age: 0,
    Gender: "",
    Blood_Type: "",
    Mobile_Number: 0,
    Address: "",
    Emer_Name: "",
    Emer_Mobile: 0
  };
  const [currentMember, setCurrentMember] = useState(initialMemberState);
  const [message, setMessage] = useState("");

  const getMember = Mem_ID => {
    ManagerDataService.get(Mem_ID)
      .then(response => {
        console.log(response.data);
        setCurrentMember(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (Mem_ID)
      getMember(Mem_ID);
  }, [Mem_ID]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentMember({ ...currentMember, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      Mem_ID: currentMember.Mem_ID,
      Mem_Name: currentMember.Mem_Name,
      Mem_Weight: currentMember.Mem_Weight,
      Mem_Height: currentMember.Mem_Height,
      Age: currentMember.Age,
      Gender: currentMember.Gender,
      Blood_Type: currentMember.Blood_Type,
      Mobile_Number: currentMember.Mobile_Number,
      Address: currentMember.Address,
      Emer_Name: currentMember.Emer_Name,
      Emer_Mobile: currentMember.Emer_Mobile

    };

    ManagerDataService.update(currentMember.Mem_ID, data)
      .then(response => {
        setCurrentMember({ ...currentMember, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateMember = () => {
    ManagerDataService.update(currentMember.Mem_ID, currentMember)
      .then(response => {
        console.log(response.data);
        setMessage("The Member was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

//   const deleteMember = () => {
//     ManagerDataService.remove(currentMember.Mem_ID)
//       .then(response => {
//         console.log(response.data);
//         navigate("/member");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

  return (
    <div className="member-submit-form" id="member">
      <img src={image} id="imgt2" />
      <Card style={{ height: '60rem', width: '50rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '0', background: 'transparent', borderColor: 'transparent' }}>
      {currentMember ? (
        <div className="edit-form">
          <h4>Member</h4>
          <form>
            <div className="form-group">
              <label className="lab" align="center" htmlFor="Mem_Name">Name</label>
              <input
                type="text"
                className="form-control int"
                id="title"
                required
                value={currentMember.Mem_Name}
                onChange={handleInputChange}
                name="Mem_Name"
              />
            </div>

            <div className="form-group">
              <label className="lab" align="center" htmlFor="Mem_Weight">Weight</label>
              <input
                type="number"
                className="form-control int"
                id="Mem_Weight"
                required
                value={currentMember.Mem_Weight}
                onChange={handleInputChange}
                name="Mem_Weight"
              />
            </div>
            <div className="form-group">
              <label className="lab" align="center" htmlFor="Mem_Height">Height</label>
              <input
                type="number"
                className="form-control int"
                id="Mem_Height"
                required
                value={currentMember.Mem_Height}
                onChange={handleInputChange}
                name="Mem_Height"
              />
            </div>
            <div className="form-group">
              <label className="lab" align="center" htmlFor="Age">Age</label>
              <input
                type="number"
                className="form-control int"
                id="Age"
                required
                value={currentMember.Age}
                onChange={handleInputChange}
                name="Age"
              />
            </div>
            <div className="form-group">
              <label className="lab" align="center" htmlFor="Gender">Gender</label>
              <input
                type="text"
                className="form-control int"
                id="Gender"
                required
                value={currentMember.Gender}
                onChange={handleInputChange}
                name="Gender"
              />
            </div>
            <div className="form-group">
              <label className="lab" align="center" htmlFor="Blood_Type">Blood Group</label>
              <input
                type="text"
                className="form-control int"
                id="Blood_Type"
                required
                value={currentMember.Blood_Type}
                onChange={handleInputChange}
                name="Blood_Type"
              />
            </div>
            <div className="form-group">
              <label className="lab" align="center" htmlFor="Mobile_Number">Mobile Number</label>
              <input
                type="number"
                className="form-control int"
                id="Mobile_Number"
                required
                value={currentMember.Mobile_Number}
                onChange={handleInputChange}
                name="Mobile_Number"
              />
            </div>
            <div className="form-group">
              <label className="lab" align="center" htmlFor="Address">Address</label>
              <input
                type="text"
                className="form-control int"
                id="Address"
                required
                value={currentMember.Address}
                onChange={handleInputChange}
                name="Address"
              />
            </div>
            <div className="form-group">
              <label className="lab" align="center" htmlFor="Emer_Name">Emergency Name</label>
              <input
                type="text"
                className="form-control int"
                id="Emer_Name"
                required
                value={currentMember.Emer_Name}
                onChange={handleInputChange}
                name="Emer_Name"
              />
            </div>
            <div className="form-group">
              <label className="lab" align="center" htmlFor="Emer_Mobile">Emerergency Contact</label>
              <input
                type="number"
                className="form-control int"
                id="Emer_Mobile"
                required
                value={currentMember.Emer_Mobile}
                onChange={handleInputChange}
                name="Emer_Mobile"
              />
            </div>


          </form>



         { 
        //      <button className="badge badge-danger mr-2" onClick={deleteMember}>
        //     Delete
        //   </button>
        }
          <button  onClick={updateMember} class="btn btn-outline-info tempBtn">Update</button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Member...</p>
        </div>
      )}
      </Card>
    </div>
  );
};

export default Member;
