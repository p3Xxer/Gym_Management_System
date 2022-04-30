import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TrainerService from "../../services/ManagerService";
import image from "../../Images/home1.jpeg"
import image1 from "../../Images/trainer.png"
import "../Member/Member.css";
import { Card } from "react-bootstrap";
import Form from "react-validation/build/form";
import {useRef} from 'react';
const Trainer = props => {
    const form = useRef();
    console.log(useParams());
  const {id } = useParams();
//  ManagerDataService.get(Trainer_ID).then(response=>console.log(response));
//   const {id}=useParams();
  
//   const { id } = useParams();
  // console.log(useParams());
//    console.log(id);
  console.log(id);
  let navigate = useNavigate();
  // console.log(Trainer_ID);
  const initialTrainerState = {
    Trainer_ID: null,
    Trainer_Name: "",
    // Trainer_Weight: 0,
    // Trainer_Height: 0,
    // Age: 0,
    Gender: "",
    Blood_Type: "",
    Phone: 0,
    Address: "",
    Emer_Name: "",
    Emer_Mobile: 0,
    Workout_Name:""
  };
  const [currentTrainer, setCurrentTrainer] = useState(initialTrainerState);
  const [message, setMessage] = useState("");

  const getTrainer = id => {
    TrainerService.getTrainer(id)
      .then(response => {
        console.log(response.data);
        setCurrentTrainer(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getTrainer(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTrainer({ ...currentTrainer, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      Trainer_ID: currentTrainer.Trainer_ID,
      Trainer_Name: currentTrainer.Trainer_Name,
      //Mem_Weight: currentTrainer.Mem_Weight,
      //Mem_Height: currentTrainer.Mem_Height,
      Age: currentTrainer.Age,
      Gender: currentTrainer.Gender,
      Blood_Type: currentTrainer.Blood_Type,
      Phone: currentTrainer.Phone,
      Address: currentTrainer.Address,
      Emer_Name: currentTrainer.Emer_Name,
      Emer_Mobile: currentTrainer.Emer_Mobile,
      Workout_Name:currentTrainer.Workout_Name


    };
    
    TrainerService.updateTrainer(currentTrainer.Trainer_ID, data)
      .then(response => {
        setCurrentTrainer({ ...currentTrainer, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTrainer = () => {

    if(window.confirm("Confirm Update?")){
    TrainerService.updateTrainer(currentTrainer.Trainer_ID, currentTrainer)
      .then(response => {
        console.log(response.data);
        setMessage("The Trainer was updated successfully!");
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
    <br />
    <br />
    <Form onSubmit={updateTrainer} ref={form} style={{width: "320px", padding: "30px", paddingTop: "100px"}}>

    <Card style={{ height: '60rem', width: '50rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '0', background: 'transparent', borderColor: 'transparent' }}>
        <div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Trainer_Name">Name</label>
            <input
              type="text"
              className="form-control int"
              id="title"
              required
              value={currentTrainer.Trainer_Name}
              onChange={handleInputChange}
              name="Trainer_Name"
            />
          </div>

          <div className="form-group">
          <label className="lab" align = "center" htmlFor="Workout_Name">Workout Name</label>
        <select className="form-control int" name="Gender" required value={currentTrainer.Gender} onChange={handleInputChange}>
          <option hidden value=''>Select Gender</option>
          
          <option className="form-control int"
          id="Workout_Name"
          value="Male">Male</option>
          <option className="form-control int"
          id="Workout_Name"
          value="Female">Female</option>
          <option className="form-control int"
          id="Workout_Name"
          value="Others">Others</option>
          </select>
          </div>
        
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Blood_Type">Blood Group</label>
            <input
              type="text"
              className="form-control int"
              id="Blood_Type"
              required
              value={currentTrainer.Blood_Type}
              onChange={handleInputChange}
              name="Blood_Type"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Phone">Phone No.</label>
            <input
              type="tel"
              className="form-control int"
              id="Phone"
              required
              title="Please Enter Valid Mobile Number" pattern="[1-9]{1}[0-9]{9}"
              value={currentTrainer.Phone}
              onChange={handleInputChange}
              name="Phone"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Address">Address</label>
            <input
              type="text"
              className="form-control int"
              id="Address"
              required
              value={currentTrainer.Address}
              onChange={handleInputChange}
              name="Address"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Emer_Name">Emergency Name</label>
            <input
              type="text"
              className="form-control int"
              id="Emer_Name"
              required
              value={currentTrainer.Emer_Name}
              onChange={handleInputChange}
              name="Emer_Name"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Emer_Mobile">Emergency Contact</label>
            <input
              type="tel"
              className="form-control int"
              id="Emer_Mobile"
              required
              title="Please Enter Valid Mobile Number" pattern="[1-9]{1}[0-9]{9}"
              value={currentTrainer.Emer_Mobile}
              onChange={handleInputChange}
              name="Emer_Mobile"
            />
          </div>
        <br />
        <br />
          <button className="btn btn-outline-info tempBtn">
            Submit
          </button>
        </div>
      </Card>
      </Form>
      </div>
      <img src={image1} id="imgt4" />
    </div>
  );
};

export default Trainer;
