import React, { useState } from "react";
import EquipmentService from "../../services/ManagerService";
import { useParams } from "react-router-dom";
import image from "../../Images/home.jpeg"
import image2 from "../../Images/addimage2.png"
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

    if(window.confirm("Want to submit?")){
      EquipmentService.createEquipment(id,data)
        .then(response => {
          setEquipment({
              Equipment_ID:response.data.Equipment_ID,
              Equipment_Name:response.data.Equipment_Name,
              Equipment_Kind:response.data.Equipment_Kind,
              Working_Status:response.data.Working_Status,
              Exercise:response.data.Exercise
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        setEquipment(initialEquipmentState);
        window.location.reload();
      }
  };

  return (
    <div>
    <img src={image} id="imgt2" />
      <div className="member-submit-form" id="member2">
    <br />
    <br />
    <br />
    <Card style={{ height: '60rem', width: '30rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '0', background: 'transparent', borderColor: 'transparent' }}>
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
           <br />
           <br />
          <button onClick={saveEquipment} className="btn btn-outline-info tempBtn3">
            Submit
          </button>
        </div>
      </Card>
      </div>
      <img src={image2} id="imgt3" />
    </div>
  );
};

export default AddEquipment;
