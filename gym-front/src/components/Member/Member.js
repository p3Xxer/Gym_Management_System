import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import MemberDataService from "/Users/khushil/Project/DBMS_Project/gym-front/src/services/MemberService.js";

const Member = props => {
  const { Mem_ID } = useParams();
  const { id } = useParams();
  // console.log(useParams());
  // console.log(id);
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
    MemberDataService.get(Mem_ID)
      .then(response => {
        setCurrentMember(response.data);
        console.log(response.data);
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

    MemberDataService.update(currentMember.Mem_ID, data)
      .then(response => {
        setCurrentMember({ ...currentMember, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateMember = () => {
    MemberDataService.update(currentMember.Mem_ID, currentMember)
      .then(response => {
        console.log(response.data);
        setMessage("The Member was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteMember = () => {
    MemberDataService.remove(currentMember.Mem_ID)
      .then(response => {
        console.log(response.data);
        navigate("/member");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentMember ? (
        <div className="edit-form">
          <h4>Member</h4>
          <form>


            <div className="form-group">
              <label htmlFor="Mem_Name">Mem_Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={currentMember.Mem_Name}
                onChange={handleInputChange}
                name="Mem_Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Mem_Weight">Mem_Weight</label>
              <input
                type="number"
                className="form-control"
                id="Mem_Weight"
                required
                value={currentMember.Mem_Weight}
                onChange={handleInputChange}
                name="Mem_Weight"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Mem_Height">Mem_Height</label>
              <input
                type="number"
                className="form-control"
                id="Mem_Height"
                required
                value={currentMember.Mem_Height}
                onChange={handleInputChange}
                name="Mem_Height"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Age">Age</label>
              <input
                type="number"
                className="form-control"
                id="Age"
                required
                value={currentMember.Age}
                onChange={handleInputChange}
                name="Age"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Gender">Gender</label>
              <input
                type="text"
                className="form-control"
                id="Gender"
                required
                value={currentMember.Gender}
                onChange={handleInputChange}
                name="Gender"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Blood_Type">Blood_Type</label>
              <input
                type="text"
                className="form-control"
                id="Blood_Type"
                required
                value={currentMember.Blood_Type}
                onChange={handleInputChange}
                name="Blood_Type"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Mobile_Number">Mobile_Number</label>
              <input
                type="number"
                className="form-control"
                id="Mobile_Number"
                required
                value={currentMember.Mobile_Number}
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
                value={currentMember.Address}
                onChange={handleInputChange}
                name="Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Emer_Name">Emer_Name</label>
              <input
                type="text"
                className="form-control"
                id="Emer_Name"
                required
                value={currentMember.Emer_Name}
                onChange={handleInputChange}
                name="Emer_Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Emer_Mobile">Emer_Mobile</label>
              <input
                type="number"
                className="form-control"
                id="Emer_Mobile"
                required
                value={currentMember.Emer_Mobile}
                onChange={handleInputChange}
                name="Emer_Mobile"
              />
            </div>


          </form>



          <button className="badge badge-danger mr-2" onClick={deleteMember}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateMember}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Member...</p>
        </div>
      )}
    </div>
  );
};

export default Member;
