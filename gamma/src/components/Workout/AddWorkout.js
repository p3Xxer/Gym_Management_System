import React, { useState } from "react";
import WorkoutService from "../../services/ManagerService";
import { useParams } from "react-router-dom";
import image from "../../Images/home.jpg"
import "../Member/Member.css";
import { Card } from "react-bootstrap";
const AddWorkout = () => {
    
  const initialWorkoutState = {
    Workout_ID:null,
    Workout_Name:"",
    Workout_DietChart:"",
    Working_Duration:""
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
      Working_Duration:workout.Working_Duration
    };

    WorkoutService.AddWorkout(data)
      .then(response => {
        setWorkout({
            Workout_ID:response.data.Workout_ID,
            Workout_Name:response.data.Workout_Name,
            Workout_DietChart:response.data.Workout_DietChart,
            Working_Duration:response.data.Working_Duration
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newWorkout = () => {
    setWorkout(initialWorkoutState);
    setSubmitted(false);
  };

  return (
    <div className="member-submit-form" id="member2" >
    <img src={image} id="imgt2" />
    <br />
    <br />
    <br />
    <br />
    <Card style={{ height: '60rem', width: '30rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '0', background: 'transparent', borderColor: 'transparent' }}>
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newWorkout}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Workout_Name">Workout_Name</label>
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
            <label className="lab" align = "center" htmlFor="Workout_DietChart">Workout_DietChart</label>
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
            <label className="lab" align = "center" htmlFor="Working_Duration">Working_Duration</label>
            <input
              type="text"
              className="form-control int" 
              id="Working_Duration"
              required
              value={workout.Working_Duration}
              onChange={handleInputChange}
              name="Working_Duration"
            />
          </div>
          {
        //       <div className="form-group">
        //     <label htmlFor="Workout_Amt">Workout_Amt</label>
        //     <input
        //       type="number"
        //       className="form-control"
        //       id="Workout_Amt"
        //       required
        //       value={workout.Workout_Amt}
        //       onChange={handleInputChange}
        //       name="Workout_Amt"
        //     />
        //   </div> 
         }
          {
        //       <div className="form-group">
        //     <label htmlFor="Member_ID">Member_ID</label>
        //     <input
        //       type="number"
        //       className="form-control"
        //       id="Member_ID"
        //       required
        //       value={workout.Member_ID}
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
        //       value={workout.Workout_Name}
        //       onChange={handleInputChange}
        //       name="Workout_Name"
        //     />
        //   </div>
        }
          <br />
           <br />      
          <button onClick={saveWorkout} className="btn btn-success tempBtn3">
            Submit
          </button>
        </div>
      )}
    </div>
    </Card>
    </div>
  );
};

export default AddWorkout;
