import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import WorkoutService from "../../services/ManagerService";

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
    Working_Duration:""
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
        Working_Duration:currentWorkout.Working_Duration

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
    WorkoutService.updateWorkout(currentWorkout.Workout_ID, currentWorkout)
      .then(response => {
        console.log(response.data);
        setMessage("The Workout was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

//   const deleteWorkout = () => {
//     WorkoutService.remove(currentWorkout.Workout_ID)
//       .then(response => {
//         console.log(response.data);
//         navigate("/workout");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
console.log(currentWorkout);
  return (
    <div>
      {currentWorkout ? (
        <div className="edit-form">
          <h4>Workout</h4>
          <form>


          <div className="form-group">
          <label htmlFor="Workout_Name">Workout_Name</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={currentWorkout.Workout_Name}
            onChange={handleInputChange}
            name="Workout_Name"
          />
        </div>

        <div className="form-group">
        <label htmlFor="Workout_DietChart">Workout_DietChart</label>
        <input
          type="text"
          className="form-control"
          id="Workout_DietChart"
          required
          value={currentWorkout.Workout_DietChart}
          onChange={handleInputChange}
          name="Workout_DietChart"
        />
      </div>
      <div className="form-group">
      <label htmlFor="Working_Duration">Working_Duration</label>
      <input
        type="text"
        className="form-control"
        id="Working_Duration"
        required
        value={currentWorkout.Working_Duration}
        onChange={handleInputChange}
        name="Working_Duration"
      />
    </div>
           


          </form>



         { 
        //      <button className="badge badge-danger mr-2" onClick={deleteWorkout}>
        //     Delete
        //   </button>
        }

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateWorkout}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Workout...</p>
        </div>
      )}
    </div>
  );
};

export default Workout;
