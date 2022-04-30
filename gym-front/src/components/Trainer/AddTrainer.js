import React, { useState ,useRef} from "react";
import TrainerDataService from "../../services/ManagerService";
import { useParams } from "react-router-dom";
import Form from "react-validation/build/form";
import image from "../../Images/home1.jpeg"
import image1 from "../../Images/trainer.png"
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../Member/Member.css";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const AddTrainer = () => {
  let navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();
    const {id}=useParams();
  const initialTrainerState = {
    Trainer_ID: null,
    Trainer_Name: "",
    Gender: "",
    Blood_Type: "",
    Phone: 0,
    Address: "",
    Emer_Name: "",
    Emer_Mobile: 0,
    Workout_Name:""
  };
  const [trainer, setTrainer] = useState(initialTrainerState);
  const [submitted, setSubmitted] = useState(false);
  const [gamma,setGamma] = useState(true);
  const [workout,setWorkout] = useState([]);
  const retrieveWorkouts = () => {
    TrainerDataService.getAllWorkout()
      .then(response => {
        setWorkout(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const required = (value) => {
    if (!value) {
      return (
        setGamma(false)
      );
    }
    
  };
  const handleInputChange = event => {
    const { name, value } = event.target;
    setTrainer({ ...trainer, [name]: value });
  };

  const saveTrainer = (e) => {
    e.preventDefault();
    var data = {
      Trainer_Name: trainer.Trainer_Name,
      Gender: trainer.Gender,
      Blood_Type: trainer.Blood_Type,
      Phone: trainer.Phone,
      Address: trainer.Address,
      Emer_Name: trainer.Emer_Name,
      Emer_Mobile: trainer.Emer_Mobile,
      Workout_Name:trainer.Workout_Name
    };
    console.log(data);
    if (checkBtn.current.context._errors.length === 0){
    if(window.confirm("Want to submit?")){
      TrainerDataService.createTrainer(id,data)
      .then(response => {
        setTrainer({
          Trainer_ID: response.data.Trainer_ID,
          Trainer_Name: response.data.Trainer_Name,
        //   Trainer_Weight: response.data.Trainer_Weight,
        //   Trainer_Height: response.data.Trainer_Height,
        //   Age: response.data.Age,
          Gender: response.data.Gender,
          Blood_Type: response.data.Blood_Type,
          Phone: response.data.Phone,
          Address: response.data.Address,
          Emer_Name: response.data.Emer_Name,
          Emer_Mobile: response.data.Emer_Mobile,
          Workout_Name:response.data.Workout_Name
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      setTrainer(initialTrainerState);
      window.location.reload();
    }
    else{
    setTrainer(initialTrainerState);
      window.location.reload();
      }
  }
  };
  useEffect(() => {
    retrieveWorkouts();
  }, []);

  return (
    <div>
    <img src={image} id="imgt2" />
    <div className="member-submit-form" id="member" >
    <br />
    <br />
    <br />
    <Form onSubmit={saveTrainer} ref={form} style={{width: "320px", padding: "30px", paddingTop: "100px"}}>
    <Card style={{ height: '60rem', width: '50rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '0', background: 'transparent', borderColor: 'transparent' }}>
        <div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Trainer_Name">Name</label>
            <Input
              type="text"
              className="form-control int"
              id="title"
              required
              value={trainer.Trainer_Name}
              onChange={handleInputChange}
              name="Trainer_Name"
              validations={[required]}
            />
          </div>

{          
  // <div className="form-group">
  //           <label className="lab" align = "center" htmlFor="Gender">Gender</label>
  //           <Input
  //             type="text"
  //             className="form-control int"
  //             id="Gender"
  //             required
  //             value={trainer.Gender}
  //             onChange={handleInputChange}
  //             name="Gender"
  //             validations={[required]}
  //           />
  //         </div>
        }
        <div className="form-group">
          <label className="lab" align = "center" htmlFor="Workout_Name">Workout Name</label>
        <select className="form-control int" name="Gender" required value={trainer.Gender} onChange={handleInputChange} validations={[required]}>
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
            <Input
              type="text"
              className="form-control int"
              id="Blood_Type"
              required
              value={trainer.Blood_Type}
              onChange={handleInputChange}
              name="Blood_Type"
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Phone">Phone No.</label>
            <Input
              type="tel"
              className="form-control int"
              id="Phone"
              required
              value={trainer.Phone}
              onChange={handleInputChange}
              title="Please Enter Valid Mobile Number" pattern="[1-9]{1}[0-9]{9}"
              name="Phone"
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Address">Address</label>
            <Input
              type="text"
              className="form-control int"
              id="Address"
              required
              value={trainer.Address}
              onChange={handleInputChange}
              name="Address"
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Emer_Name">Emergency Name</label>
            <Input
              type="text"
              className="form-control int"
              id="Emer_Name"
              required
              value={trainer.Emer_Name}
              onChange={handleInputChange}
              name="Emer_Name"
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Emer_Mobile">Emergency Contact</label>
            <Input
              type="tel"
              className="form-control int"
              id="Emer_Mobile"
              required
              value={trainer.Emer_Mobile}
              title="Please Enter Valid Mobile Number" pattern="[1-9]{1}[0-9]{9}"
              onChange={handleInputChange}
              name="Emer_Mobile"
              validations={[required]}
            />
          </div>
          <div className="form-group">
          <label className="lab" align = "center" htmlFor="Workout_Name">Workout Name</label>
          <select className="form-control int" name="Workout_Name" required value={trainer.Workout_Name} onChange={handleInputChange} validations={[required]}>
          <option hidden value=''>Select Workout</option>
          {workout && workout.map((workout,index)=>(
            
            <option
            type="text"
            className="form-control int"
            id="Workout_Name"
            value={workout.Workout_Name}
            required
            validations = {[required]}
          > {workout.Workout_Name}</option>))}
          </select>
        </div>
        <br />
        <br />
          <button className="btn btn-outline-info tempBtn">
            Submit
          </button>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </div>
      </Card>
      </Form>
      </div>
      <img src={image1} id="imgt4" />
    </div>
  );
};

export default AddTrainer;
