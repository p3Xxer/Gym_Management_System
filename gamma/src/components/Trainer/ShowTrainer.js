import React, { useState, useEffect } from "react";
import TrainerService from "../../services/ManagerService";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import image from "../../Images/home.jpeg"
import "../table.css"

const TrainerList = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState([]);
  const [currentTrainer, setCurrentTrainer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchMem_Name, setSearchMem_Name] = useState("");

  useEffect(() => {
    retrieveTrainers();
  }, []);

  const onChangeSearchMem_Name = e => {
    const searchMem_Name = e.target.value;
    setSearchMem_Name(searchMem_Name);
  };

  const retrieveTrainers = () => {
    TrainerService.showTrainer(id)
      .then(response => {
        setTrainer(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTrainers();
    setCurrentTrainer(null);
    setCurrentIndex(-1);
  };

  const setActiveTrainer = (trainer, index) => {
    setCurrentTrainer(trainer);
    setCurrentIndex(index);
  };

  //   const removeAllTrainers = () => {
  //     TrainerDataService.removeAll()
  //       .then(response => {
  //         console.log(response.data);
  //         refreshList();
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   };

  //   const findByMem_Name = () => {
  //     TrainerDataService.findByMem_Name(searchMem_Name)
  //       .then(response => {
  //         setTrainer(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   };

  const deleteTrainer =(Trainer_ID) => {
    console.log(Trainer_ID);
    TrainerService.removeTrainer(Trainer_ID)
      .then(response => {
        console.log(response.data);
        refreshList();
      })
  }

  console.log(trainer)
  return (
    <div className="list row" align="center">
      <div className="" align="center" margin-left="auto" margin-right="auto" width="50%" vertical-align="center">
        <h4 className="lab">Trainers List</h4>
        <br />
        {/* khushil working */}

        <Table striped hover class="table" variant="dark" align="center" dataAlign="center" style={{}}>
          <thead class="thead-primary">
            <tr>

              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Mobile Number</th>
              <th>Address</th>
              <th>Emergency Mobile Number</th>
              <th>Emergency Name</th>
              <th>Branch ID</th>
              <th>Workout ID</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {trainer.map((trainer, index) => (
            <tr>
              <td class="scope">{trainer.Trainer_ID}</td>
              <td>{trainer.Trainer_Name}</td>
              <td>{trainer.Gender}</td>
              <td>{trainer.Blood_Type}</td>
              <td>{trainer.Phone}</td>
              <td>{trainer.Address}</td>
              <td>{trainer.Emer_Mobile}</td>
              <td>{trainer.Emer_Name}</td>
              <td>{trainer.Branch_ID}</td>
              <td>{trainer.Workout_ID}</td>

              <td>
                <Link
                  to={"/edittrainer/" + trainer.Trainer_ID}
                  class="btn btn-primary pqy">Edit</Link>
              </td>
               <td><button class="btn-danger btn btn-primary pqy" onClick={() => { deleteTrainer(trainer.Trainer_ID) }}>Delete</button></td> 
            </tr>
          ))}
          </tbody>
        </Table>

        {/* <ul className="list-group">
          {trainer &&
            trainer.map((trainer, index) => (
              <li
                className={
                  "list-group-item " 
                }
                
                
                key={index}
              >
                {trainer.Trainer_ID    }                  {trainer.Trainer_Desc}   
              </li>
              
              
            ))}
        </ul> */}

        {
          //     <button
          //   className="m-3 btn btn-sm btn-danger"
          //   onClick={removeAllTrainers}
          // >
          //   Remove All
          // </button>
        }
      </div>
      {
        //       <div className="col-md-6">
        //     {currentTrainer ? (
        //       <div>
        //         <h4>Trainers</h4>
        //         <div>
        //           <label>
        //             <strong>Mem_Name:</strong>
        //           </label>{" "}

        //           {currentTrainer.Trainer_ID}
        //         </div>
        //         <Link
        //           to={"/edittrainer/" + currentTrainer.Trainer_ID}
        //           className="badge badge-warning"
        //         >
        //           Edit
        //         </Link>
        //       </div>
        //     ) : (
        //       <div>
        //         <br />
        //         <p>Please click on a Trainer...</p>
        //       </div>
        //     )}
        //   </div>
      }
      <img src={image} id="imgt2" />
    </div>
  );
};

export default TrainerList;
