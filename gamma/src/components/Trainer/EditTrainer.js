import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TrainerService from "../../services/ManagerService";

const Trainer = props => {
    
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
    TrainerService.updateTrainer(currentTrainer.Trainer_ID, currentTrainer)
      .then(response => {
        console.log(response.data);
        setMessage("The Trainer was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

//   const deleteTrainer = () => {
//     ManagerDataService.remove(currentTrainer.Trainer_ID)
//       .then(response => {
//         console.log(response.data);
//         navigate("/trainer");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

  return (
    <div>
      {currentTrainer ? (
        <div className="edit-form">
          <h4>Trainer</h4>
          <form>


          <div className="form-group">
          <label htmlFor="Trainer_Name">Trainer_Name</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={currentTrainer.Trainer_Name}
            onChange={handleInputChange}
            name="Trainer_Name"
          />
        </div>

            <div className="form-group">
              <label htmlFor="Gender">Gender</label>
              <input
                type="text"
                className="form-control"
                id="Gender"
                required
                value={currentTrainer.Gender}
                onChange={handleInputChange}
                name="Gender"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Blood_Type">Blood_Type</label>
              <input
                type="number"
                className="form-control"
                id="Blood_Type"
                required
                value={currentTrainer.Blood_Type}
                onChange={handleInputChange}
                name="Blood_Type"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input
                type="number"
                className="form-control"
                id="Phone"
                required
                value={currentTrainer.Phone}
                onChange={handleInputChange}
                name="Phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                className="form-control"
                id="Address"
                required
                value={currentTrainer.Address}
                onChange={handleInputChange}
                name="Address"
              />
            </div>
            
            
            
            <div className="form-group">
              <label htmlFor="Emer_Name">Emer_Name</label>
              <input
                type="text"
                className="form-control"
                id="Emer_Name"
                required
                value={currentTrainer.Emer_Name}
                onChange={handleInputChange}
                name="Emer_Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Emer_Mobile">Emer_Mobile</label>
              <input
                type="number"
                className="form-control"
                id="Emer_Mobile"
                required
                value={currentTrainer.Emer_Mobile}
                onChange={handleInputChange}
                name="Emer_Mobile"
              />
            </div>
            <div className="form-group">
          <label htmlFor="Workout_Name">Workout_Name</label>
          <input
            type="text"
            className="form-control"
            id="Workout_Name"
            required
            value={currentTrainer.Workout_Name}
            onChange={handleInputChange}
            name="Workout_Name"
          />
        </div>


          </form>



         { 
        //      <button className="badge badge-danger mr-2" onClick={deleteTrainer}>
        //     Delete
        //   </button>
        }

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTrainer}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Trainer...</p>
        </div>
      )}
    </div>
  );
};

export default Trainer;
