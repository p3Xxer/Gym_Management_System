import React, { useState } from "react";
import EquipmentService from "../../services/ManagerService";
import { useParams } from "react-router-dom";
import image from "../../Images/home.jpeg"
import "../Member/Member.css";
import { Card } from "react-bootstrap";
const AddEquipment = () => {
    const {id}=useParams();
    console.log(id);
  const initialEquipmentState = {
    Equipment_ID:null,
    Equipment_Name:"",
    Equipment_Kind:"",
    Working_Status:"",
    Exercise:"",
  };
  const [equipment, setEquipment] = useState(initialEquipmentState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEquipment({ ...equipment, [name]: value });
  };

  const saveEquipment = () => {
    var data = {
      Equipment_Name:equipment.Equipment_Name,
      Equipment_Kind:equipment.Equipment_Kind,
      Working_Status:equipment.Working_Status,
      Exercise:equipment.Exercise
    };

    EquipmentService.createEquipment(id,data)
      .then(response => {
        setEquipment({
            Equipment_ID:response.data.Equipment_ID,
            Equipment_Name:response.data.Equipment_Name,
            Equipment_Kind:response.data.Equipment_Kind,
            Working_Status:response.data.Working_Status,
            Exercise:response.data.Exercise
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEquipment = () => {
    setEquipment(initialEquipmentState);
    setSubmitted(false);
  };

  return (
    <div className="member-submit-form" id="member2">
    <img src={image} id="imgt2" />
    <br />
    <br />
    <br />
    <Card style={{ height: '60rem', width: '30rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '0', background: 'transparent', borderColor: 'transparent' }}>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEquipment}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Equipment_Name">Equipment Name</label>
            <input
              type="text"
              className="form-control int"
              id="title"
              required
              value={equipment.Equipment_Name}
              onChange={handleInputChange}
              name="Equipment_Name"
            />
          </div>

          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Equipment_Kind">Equipment Kind</label>
            <input
              type="text"
              className="form-control int"
              id="Equipment_Kind"
              required
              value={equipment.Equipment_Kind}
              onChange={handleInputChange}
              name="Equipment_Kind"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Working_Status">Working Status</label>
            <input
              type="text"
              className="form-control int"
              id="Working_Status"
              required
              value={equipment.Working_Status}
              onChange={handleInputChange}
              name="Working_Status"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Exercise">Exercise</label>
            <input
              type="text"
              className="form-control int"
              id="Exercise"
              required
              value={equipment.Exercise}
              onChange={handleInputChange}
              name="Exercise"
            />
          </div>
          {
        //       <div className="form-group">
        //     <label htmlFor="Equipment_Amt">Equipment_Amt</label>
        //     <input
        //       type="number"
        //       className="form-control"
        //       id="Equipment_Amt"
        //       required
        //       value={equipment.Equipment_Amt}
        //       onChange={handleInputChange}
        //       name="Equipment_Amt"
        //     />
        //   </div>  
        //   <div className="form-group">
        //     <label htmlFor="Member_ID">Member_ID</label>
        //     <input
        //       type="number"
        //       className="form-control"
        //       id="Member_ID"
        //       required
        //       value={equipment.Member_ID}
        //       onChange={handleInputChange}
        //       name="Member_ID"
        //     />
        //   </div>
        //   <div className="form-group">
        //     <label htmlFor="Workout_Name">Workout_Name</label>
        //     <input
        //       type="text"
        //       className="form-control"
        //       id="Workout_Name"
        //       required
        //       value={equipment.Workout_Name}
        //       onChange={handleInputChange}
        //       name="Workout_Name"
        //     />
        //   </div>   
           }
           <br />
           <br />
          <button onClick={saveEquipment} className="btn btn-success tempBtn3">
            Submit
          </button>
        </div>
      )}
      </Card>
    </div>
  );
};

export default AddEquipment;
