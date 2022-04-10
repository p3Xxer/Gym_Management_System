import React, { useState } from "react";
import MemberDataService from "../services/MemberService";

const AddMember = () => {
  const initialMemberState = {
    id: null,
    Mem_Name: "",
    Mem_Weight: 0,
    Mem_Height:0,
    Age:0,
    Gender:"",
    Blood_Type:"",
    Mobile_Number:0,
    Address:"",
    Emer_Name:"",
    Emer_Mobile:0
  };
  const [member, setMember] = useState(initialMemberState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  const saveMember = () => {
    var data = {
      Mem_Name: member.Mem_Name,
      Mem_Weight: member.Mem_Weight,
      Mem_Height:member.Mem_Height,
      Age:member.Age,
      Gender:member.Gender,
      Blood_Type:member.Blood_Type,
      Mobile_Number:member.Mobile_Number,
      Address:member.Address,
      Emer_Name:member.Emer_Name,
      Emer_Mobile:member.Emer_Mobile
    };

    MemberDataService.create(data)
      .then(response => {
        setMember({
          id: response.data.id,
          Mem_Name: response.data.Mem_Name,
          Mem_Weight: response.data.Mem_Weight,
          Mem_Height:response.data.Mem_Height,
          Age:response.data.Age,
          Gender:response.data.Gender,
          Blood_Type:response.data.Blood_Type,
          Mobile_Number:response.data.Mobile_Number,
          Address:response.data.Address,
          Emer_Name:response.data.Emer_Name,
          Emer_Mobile:response.data.Emer_Mobile

        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newMember = () => {
    setMember(initialMemberState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newMember}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="Mem_Name">Mem_Name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={member.Mem_Name}
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
              value={member.Mem_Weight}
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
              value={member.Mem_Height}
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
              value={member.Age}
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
              value={member.Gender}
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
              value={member.Blood_Type}
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
              value={member.Mobile_Number}
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
              value={member.Address}
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
              value={member.Emer_Name}
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
              value={member.Emer_Mobile}
              onChange={handleInputChange}
              name="Emer_Mobile"
            />
          </div>

          <button onClick={saveMember} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMember;
