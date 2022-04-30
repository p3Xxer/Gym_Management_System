import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import WorkoutService from "../../services/ManagerService";
import image from "../../Images/home1.jpeg"
import image2 from "../../Images/workout.png"
import "../Member/Member.css";
import { Card } from "react-bootstrap";
const Workout = props => {
    

    console.log(useParams());
  const { id } = useParams();
//  WorkoutService.get(Workout_ID).then(response=>console.log(response));
//   const {id}=useParams();
  
//   const { id } = useParams();
  // console.log(useParams());
//    console.log(id);
  console.log(id);
  let navigate = useNavigate();
  // console.log(Workout_ID);
  const initialWorkoutState = {
    Workout_ID:null,
    Workout_Name:"",
    Workout_DietChart:"",
    Working_Duration:"",
    Workout_Price:""
  };
  const [currentWorkout, setCurrentWorkout] = useState(initialWorkoutState);
  const [message, setMessage] = useState("");

  const getWorkout = id => {
    WorkoutService.getWorkout(id)
      .then(response => {
        console.log(response.data);
        setCurrentWorkout(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getWorkout(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentWorkout({ ...currentWorkout, [name]: value });
  };

  const updatePublished = status => {
    var data = {
        Workout_Name:currentWorkout.Workout_Name,
        Workout_DietChart:currentWorkout.Workout_DietChart,
        Working_Duration:currentWorkout.Working_Duration,
        Workout_Price:currentWorkout.Workout_Price
    };
    WorkoutService.updateWorkout(currentWorkout.Workout_ID, data)
      .then(response => {
        setCurrentWorkout({ ...currentWorkout, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateWorkout = () => {

    if(window.confirm("Confirm Update?")){
    WorkoutService.updateWorkout(currentWorkout.Workout_ID, currentWorkout)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }
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
              value={currentWorkout.Workout_Name}
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
              value={currentWorkout.Workout_DietChart}
              onChange={handleInputChange}
              name="Workout_DietChart"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Working_Duration">Duration (in months)</label>
            <input
              type="number"
              className="form-control int" 
              id="Working_Duration"
              required
              value={currentWorkout.Working_Duration}
              onChange={handleInputChange}
              name="Working_Duration"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Workout_Price">Price (in Rs)</label>
            <input
              type="number"
              className="form-control int" 
              id="Workout_Price"
              required
              value={currentWorkout.Workout_Price}
              onChange={handleInputChange}
              name="Workout_Price"
            />
          </div>        
          <br />
           <br />      
          <button onClick={updateWorkout} className="btn btn-outline-info tempBtn3">
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

export default Workout;
