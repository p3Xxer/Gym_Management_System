import React, { useState, useEffect } from "react";
import WorkoutService from "../../services/ManagerService";
import { Link, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import image from "../../Images/home.jpeg"
import "../table.css"
const WorkoutList = () => {

  const [workout, setWorkout] = useState([]);
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchMem_Name, setSearchMem_Name] = useState("");

  useEffect(() => {
    retrieveWorkouts();
  }, []);

  const onChangeSearchMem_Name = e => {
    const searchMem_Name = e.target.value;
    setSearchMem_Name(searchMem_Name);
  };

  const retrieveWorkouts = () => {
    WorkoutService.getAllWorkout()
      .then(response => {
        setWorkout(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveWorkouts();
    setCurrentWorkout(null);
    setCurrentIndex(-1);
  };

  const setActiveWorkout = (workout, index) => {
    setCurrentWorkout(workout);
    setCurrentIndex(index);
  };

  //   const removeAllWorkouts = () => {
  //     WorkoutDataService.removeAll()
  //       .then(response => {
  //         console.log(response.data);
  //         refreshList();
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   };

  //   const findByMem_Name = () => {
  //     WorkoutDataService.findByMem_Name(searchMem_Name)
  //       .then(response => {
  //         setWorkout(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   };

  return (
    <div className="list row" align="center">
    <img src={image} id="imgt2" />  
      <div className="" align="center" margin-left="auto" margin-right="auto" width="50%" vertical-align="center">
      <br/>
        <h4 className="lab">WORKOUTS LIST</h4>
        <br/>
        <Table striped bordered class="table" hover variant="dark" align="center" dataAlign="center" style={{}}>
          <thead class="thead-primary">
            <tr>

              <th>Workout ID</th>
              <th>Workout Name</th>
              <th>Diet Chart</th>
              <th>Duration</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {workout.map((workout, index) => (
            <tr>
              <td>{workout.Workout_ID}</td>
              <td>{workout.Workout_Name}</td>
              <td>{workout.Workout_DietChart}</td>
              <td>{workout.Working_Duration}</td>

              <td>
                <Link
                  to={"/workout/edit/" + workout.Workout_ID}
                  class="btn btn-primary pqy">Edit</Link>
              </td>
              {/* <td><button class="btn-danger btn btn-primary pqy" onClick={() => { deleteBranch(branch_manager.Branch_ID) }}>Delete</button></td> */}
            </tr>
          ))}
          </tbody>
        </Table>

        {/* <ul className="list-group">
          {workout &&
            workout.map((workout, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => {
                  setActiveWorkout(workout, index)
                  console.log(workout.Workout_Name)
                }
                }
                key={index}
              >
                {workout.Workout_Name}
              </li>
            ))}
        </ul> */}

        {
          //     <button
          //   className="m-3 btn btn-sm btn-danger"
          //   onClick={removeAllWorkouts}
          // >
          //   Remove All
          // </button>
        }
      </div>
      {
        //   <div className="col-md-6">
        //   {currentWorkout ? (
        //     <div>
        //       <h4>Workouts</h4>
        //       <div>
        //         <label>
        //           <strong>Mem_Name:</strong>
        //         </label>{" "}

        //         {currentWorkout.Workout_ID}
        //       </div>
        //       <Link
        //         to={"/editworkout/" + currentWorkout.Workout_ID}
        //         className="badge badge-warning"
        //       >
        //         Edit
        //       </Link>
        //     </div>
        //   ) : (
        //     <div>
        //       <br />
        //       <p>Please click on a Workout...</p>
        //     </div>
        //   )}
        // </div>
      }
    </div>
  );
};

export default WorkoutList;
