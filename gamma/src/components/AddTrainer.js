import React, { useState } from "react";
import TrainerDataService from "../services/ManagerService";
import { useParams } from "react-router-dom";

const AddTrainer = () => {
    const {id}=useParams();
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
    Emer_Mobile: 0
  };
  const [trainer, setTrainer] = useState(initialTrainerState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTrainer({ ...trainer, [name]: value });
  };

  const saveTrainer = () => {
    var data = {
      Trainer_Name: trainer.Trainer_Name,
    //   Trainer_Weight: trainer.Trainer_Weight,
    //   Trainer_Height: trainer.Trainer_Height,
    //   Age: trainer.Age,
      Gender: trainer.Gender,
      Blood_Type: trainer.Blood_Type,
      Phone: trainer.Phone,
      Address: trainer.Address,
      Emer_Name: trainer.Emer_Name,
      Emer_Mobile: trainer.Emer_Mobile
    };

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
          Emer_Mobile: response.data.Emer_Mobile
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTrainer = () => {
    setTrainer(initialTrainerState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTrainer}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="Trainer_Name">Trainer_Name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={trainer.Trainer_Name}
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
              value={trainer.Gender}
              onChange={handleInputChange}
              name="Gender"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Blood_Type">Blood_Type</label>
            <input
              type="text"
              className="form-control"
              id="Blood_Type"
              required
              value={trainer.Blood_Type}
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
              value={trainer.Phone}
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
              value={trainer.Address}
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
              value={trainer.Emer_Name}
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
              value={trainer.Emer_Mobile}
              onChange={handleInputChange}
              name="Emer_Mobile"
            />
          </div>

          <button onClick={saveTrainer} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTrainer;
