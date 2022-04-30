import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import EquipmentService from "../../services/ManagerService";
import image from "../../Images/home1.jpeg"
import image2 from "../../Images/addimage2.png"
import "../Member/Member.css";
import { Card } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useRef } from "react";
const Equipment = props => {
    const form = useRef();
    console.log(useParams());
  const {id } = useParams();
//  ManagerDataService.get(Equipment_ID).then(response=>console.log(response));
//   const {id}=useParams();
  
//   const { id } = useParams();
  // console.log(useParams());
//    console.log(id);
  console.log(id);
  let navigate = useNavigate();
  // console.log(Equipment_ID);
  const initialEquipmentState = {
    Equipment_ID:null,
    Equipment_Name:"",
    Equipment_Kind:"",
    Working_Status:"",
    Exercise:""
  };
  const [currentEquipment, setCurrentEquipment] = useState(initialEquipmentState);
  const [message, setMessage] = useState("");

  const getEquipment = id => {
    EquipmentService.getEquipment(id)
      .then(response => {
        console.log(response.data);
        setCurrentEquipment(response.data);
        console.log(currentEquipment);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getEquipment(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentEquipment({ ...currentEquipment, [name]: value });
  };

  const updatePublished = status => {
    var data = {
        Equipment_ID:currentEquipment.Equipment_ID,
        Equipment_Name:currentEquipment.Equipment_Name,
        Equipment_Kind:currentEquipment.Equipment_Kind,
        Working_Status:currentEquipment.Working_Status,
        Exercise:currentEquipment.Exercise

    };

    if(window.confirm("Confirm Update?")){
    EquipmentService.updateEquipment(currentEquipment.Equipment_ID, data)
      .then(response => {
        setCurrentEquipment({ ...currentEquipment, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }
  };

  const updateEquipment = () => {
    if(window.confirm("Confirm Update?")){
    EquipmentService.updateEquipment(currentEquipment.Equipment_ID, currentEquipment)
      .then(response => {
        console.log(response.data);
        setMessage("The Equipment was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
    }
  };

  return (
    <div>
    <img src={image} id="imgt2" />
      <div className="member-submit-form" id="member2">
    <br />
    <br />
    <br />
    <Form onSubmit={updateEquipment} ref={form} style={{width: "320px", padding: "30px", paddingTop: "100px"}}>

    <Card style={{ height: '60rem', width: '30rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '0', background: 'transparent', borderColor: 'transparent' }}>
        <div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Equipment_Name">Equipment Name</label>
            <input
              type="text"
              className="form-control int"
              id="title"
              required
              value={currentEquipment.Equipment_Name}
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
              value={currentEquipment.Equipment_Kind}
              onChange={handleInputChange}
              name="Equipment_Kind"
            />
          </div>
          <div className="form-group">
          <label className="lab" align = "center" htmlFor="Working_Status">Working Status</label>
        <select className="form-control int" name="Working_Status" required value={currentEquipment.Working_Status} onChange={handleInputChange}>
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
              value={currentEquipment.Exercise}
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

export default Equipment;
