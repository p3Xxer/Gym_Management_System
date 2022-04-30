import React, { useState, useEffect } from "react";
import WorkoutService from "../../services/ManagerService";
import { Link, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import image from "../../Images/home.jpeg"
import "../table.css"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const WorkoutList = () => {

  const [workout, setWorkout] = useState([]);
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchMem_Name, setSearchMem_Name] = useState("");

  useEffect(() => {
    retrieveWorkouts();
  }, []);

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


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

  const deleteWorkout=(Workout_ID) => {
    console.log(Workout_ID);
    if(window.confirm("Do you want to delete this entry?")){
    WorkoutService.removeWorkout(Workout_ID)
      .then(response => {
        console.log(response.data);
        refreshList();
      })
    }
  }

  return (
    <div className="list row" align="center">
    <img src={image} id="imgt2" />  
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        zIndex: -5,
        zLayers:0.1,
        
        fpsLimit: 1000,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode:"grab"
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 8,
            },
            repulse: {
              distance: 200,
              duration: 10,
            },
          },
        },
        particles: {
          color: {
            value: "",
          },
          links: {
            color: "#ff0000",
            distance: 150,
            enable: true,
            opacity: 0.8,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      <div className="" align="center" margin-left="auto" margin-right="auto" width="50%" vertical-align="center">
        <h4 className="lab">WORKOUTS LIST</h4>
        <Table striped class="table" bordered hover variant="dark" align="center" dataAlign="center" style={{ background: "black", opacity: "0.8", textAlign: "center", borderRadius: '30px', marginInlineStart: '-2rem' }}>
          <thead class="thead-primary">
            <tr>

              <th>Workout ID</th>
              <th>Workout Name</th>
              <th>Diet Chart</th>
              <th>Duration</th>
              <th>Price</th>
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
              <td>{workout.Workout_Price}</td>
              <td>
                <Link
                  to={"/editworkout/" + workout.Workout_ID}
                  class="btn btn-primary pqy">Edit</Link>

              </td>
               <td><button class="btn-danger btn btn-primary pqy" onClick={() => { deleteWorkout(workout.Workout_ID) }}>Delete</button></td> 
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
