import React, { useState } from "react";
import WorkoutService from "../../services/ManagerService";
import { useParams } from "react-router-dom";
import image from "../../Images/home1.jpeg"
import image2 from "../../Images/workout.png"
import "../Member/Member.css";
import { Card } from "react-bootstrap";
const AddWorkout = () => {
    
  const initialWorkoutState = {
    Workout_ID:null,
    Workout_Name:"",
    Workout_DietChart:"",
    Working_Duration:"",
    Workout_Price:"",
  };
  const [workout, setWorkout] = useState(initialWorkoutState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setWorkout({ ...workout, [name]: value });
  };

  const saveWorkout = () => {
    var data = {
      Workout_Name:workout.Workout_Name,
      Workout_DietChart:workout.Workout_DietChart,
      Working_Duration:workout.Working_Duration,
      Workout_Price:workout.Workout_Price
    };

    if(window.confirm("Want to submit?")){
      WorkoutService.AddWorkout(data)
        .then(response => {
          setWorkout({
              Workout_ID:response.data.Workout_ID,
              Workout_Name:response.data.Workout_Name,
              Workout_DietChart:response.data.Workout_DietChart,
              Working_Duration:response.data.Working_Duration,
              Workout_Price:response.data.Workout_Price
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        setWorkout(initialWorkoutState);
        window.location.reload();
      }
  };

  const newWorkout = () => {
    setWorkout(initialWorkoutState);
    setSubmitted(false);
  };

  return (
    <div>
    <img src={image} id="imgt2" />
    <div className="member-submit-form" id="member2" >
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Card style={{ height: '60rem', width: '30rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '0', background: 'transparent', borderColor: 'transparent' }}>
    <div className="submit-form">
        <div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Workout_Name">Name</label>
            <input
              type="text"
              className="form-control int"
              id="title"
              required
              value={workout.Workout_Name}
              onChange={handleInputChange}
              name="Workout_Name"
            />
          </div>

          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Workout_DietChart">DietChart</label>
            <input
              type="text"
              className="form-control int"
              id="Workout_DietChart"
              required
              value={workout.Workout_DietChart}
              onChange={handleInputChange}
              name="Workout_DietChart"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Working_Duration">Duration (in Months)</label>
            <input
              type="number"
              className="form-control int" 
              id="Working_Duration"
              required
              value={workout.Working_Duration}
              onChange={handleInputChange}
              name="Working_Duration"
            />
          </div>        
          <br />
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Workout_Price">Price (in Rs)</label>
            <input
              type="number"
              className="form-control int" 
              id="Workout_Price"
              required
              value={workout.Workout_Price}
              onChange={handleInputChange}
              name="Workout_Price"
            />
          </div>
           <br />      
          <button onClick={saveWorkout} className="btn btn-outline-info tempBtn3">
            Submit
          </button>
        </div>
    </div>
    </Card>
    </div>
    <img src={image2} id="imgt4" />
    </div>
  );
};

export default AddWorkout;
