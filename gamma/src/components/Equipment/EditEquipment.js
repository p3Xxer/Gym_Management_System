import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import EquipmentService from "../../services/ManagerService";

const Equipment = props => {
    
    console.log(useParams());
  const {id } = useParams();
//  ManagerDataService.get(Equipment_ID).then(response=>console.log(response));
//   const {id}=useParams();
  
//   const { id } = useParams();
  // console.log(useParams());
//    console.log(id);
  console.log(id);
  let navigate = useNavigate();
  // console.log(Equipment_ID);
  const initialEquipmentState = {
    Equipment_ID:null,
    Equipment_Name:"",
    Equipment_Kind:"",
    Working_Status:"",
    Exercise:"",
  };
  const [currentEquipment, setCurrentEquipment] = useState(initialEquipmentState);
  const [message, setMessage] = useState("");

  const getEquipment = id => {
    EquipmentService.getEquipment(id)
      .then(response => {
        console.log(response.data);
        setCurrentEquipment(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getEquipment(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentEquipment({ ...currentEquipment, [name]: value });
  };

  const updatePublished = status => {
    var data = {
        Equipment_ID:currentEquipment.Equipment_ID,
        Equipment_Name:currentEquipment.Equipment_Name,
        Equipment_Kind:currentEquipment.Equipment_Kind,
        Working_Status:currentEquipment.Working_Status,
        Exercise:currentEquipment.Exercise

    };

    EquipmentService.updateEquipment(currentEquipment.Equipment_ID, data)
      .then(response => {
        setCurrentEquipment({ ...currentEquipment, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateEquipment = () => {
    EquipmentService.updateEquipment(currentEquipment.Equipment_ID, currentEquipment)
      .then(response => {
        console.log(response.data);
        setMessage("The Equipment was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

//   const deleteEquipment = () => {
//     ManagerDataService.remove(currentEquipment.Equipment_ID)
//       .then(response => {
//         console.log(response.data);
//         navigate("/equipment");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

  return (
    <div>
      {currentEquipment ? (
        <div className="edit-form">
          <h4>Equipment</h4>
          <form>


          <div className="form-group">
          <label htmlFor="Equipment_Name">Equipment_Name</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={currentEquipment.Equipment_Name}
            onChange={handleInputChange}
            name="Equipment_Name"
          />
        </div>

            <div className="form-group">
              <label htmlFor="Equipment_Kind">Equipment_Kind</label>
              <input
                type="text"
                className="form-control"
                id="Equipment_Kind"
                required
                value={currentEquipment.Equipment_Kind}
                onChange={handleInputChange}
                name="Equipment_Kind"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Working_Status">Working_Status</label>
              <input
                type="text"
                className="form-control"
                id="Working_Status"
                required
                value={currentEquipment.Working_Status}
                onChange={handleInputChange}
                name="Working_Status"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Exercise">Exercise</label>
              <input
                type="text"
                className="form-control"
                id="Exercise"
                required
                value={currentEquipment.Exercise}
                onChange={handleInputChange}
                name="Exercise"
              />
            </div>
            

          </form>



         { 
        //      <button className="badge badge-danger mr-2" onClick={deleteEquipment}>
        //     Delete
        //   </button>
        }

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateEquipment}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Equipment...</p>
        </div>
      )}
    </div>
  );
};

export default Equipment;
