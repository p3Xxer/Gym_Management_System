import React, { useState } from "react";
import EquipmentService from "../../services/ManagerService";
import { useParams } from "react-router-dom";
import image from "../../Images/home1.jpeg"
import image2 from "../../Images/addimage2.png"
import "../Member/Member.css";
import { Card } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useRef } from "react";
const AddEquipment = () => {
  const form = useRef();
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
    <Form onSubmit={saveEquipment} ref={form} style={{width: "320px", padding: "30px", paddingTop: "100px"}}>
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
          {
          //   <div className="form-group">
          //   <label className="lab" align = "center" htmlFor="Working_Status">Working Status</label>
          //   <input
          //     type="text"
          //     className="form-control int"
          //     id="Working_Status"
          //     required
          //     value={equipment.Working_Status}
          //     onChange={handleInputChange}
          //     name="Working_Status"
          //   />
          // </div>
        }
        <div className="form-group">
          <label className="lab" align = "center" htmlFor="Working_Status">Working Status</label>
        <select className="form-control int" name="Working_Status" required value={equipment.Working_Status} onChange={handleInputChange}>
          <option hidden value=''>Select Status</option>
          
          <option className="form-control int"
          id="Working_Status"
          value="Working">Working</option>
          <option className="form-control int"
          id="Working_Status"
          value="Non Working">Non Working</option>
          </select>
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
          <button  className="btn btn-outline-info tempBtn3">
            Submit
          </button>
        </div>
      </Card>
      </Form>
      </div>
      <img src={image2} id="imgt4" />
    </div>
  );
};

export default AddEquipment;
