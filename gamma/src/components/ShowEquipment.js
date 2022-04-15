import React, { useState, useEffect } from "react";
import EquipmentService from "../services/ManagerService";
import { Link ,useParams} from "react-router-dom";


const EquipmentList = () => {
    const {id} = useParams();
  const [equipment, setEquipment] = useState([]);
  const [currentEquipment, setCurrentEquipment] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchMem_Name, setSearchMem_Name] = useState("");

  useEffect(() => {
    retrieveEquipments();
  }, []);

  const onChangeSearchMem_Name = e => {
    const searchMem_Name = e.target.value;
    setSearchMem_Name(searchMem_Name);
  };

  const retrieveEquipments = () => {
    EquipmentService.showEquipment(id)
      .then(response => {
        setEquipment(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveEquipments();
    setCurrentEquipment(null);
    setCurrentIndex(-1);
  };

  const setActiveEquipment = (equipment, index) => {
    setCurrentEquipment(equipment);
    setCurrentIndex(index);
  };

//   const removeAllEquipments = () => {
//     EquipmentDataService.removeAll()
//       .then(response => {
//         console.log(response.data);
//         refreshList();
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const findByMem_Name = () => {
//     EquipmentDataService.findByMem_Name(searchMem_Name)
//       .then(response => {
//         setEquipment(response.data);
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
console.log(equipment)
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Mem_Name"
            //value={searchMem_Name}
            //onChange={onChangeSearchMem_Name}
          />
          {
        //       <div className="input-group-append">
        //     <button
        //       className="btn btn-outline-secondary"
        //       type="button"
        //       onClick={findByMem_Name}
        //     >
        //       Search
        //     </button>
        //   </div>
        }
        </div>
      </div>
      <div className="col-md-6">
        <h4>Equipments List</h4>

        <ul className="list-group">
          {equipment &&
            equipment.map((equipment, index) => (
              <li
                className={
                  "list-group-item " 
                }
                onClick={() => {
                  setActiveEquipment(equipment, index)
                }
                }
                key={index}
              >
                {equipment.Equipment_ID    }                  {equipment.Equipment_Desc}   
              </li>
              
              
            ))}
        </ul>

        {
        //     <button
        //   className="m-3 btn btn-sm btn-danger"
        //   onClick={removeAllEquipments}
        // >
        //   Remove All
        // </button>
    }
      </div>
      {
    //       <div className="col-md-6">
    //     {currentEquipment ? (
    //       <div>
    //         <h4>Equipments</h4>
    //         <div>
    //           <label>
    //             <strong>Mem_Name:</strong>
    //           </label>{" "}
             
    //           {currentEquipment.Equipment_ID}
    //         </div>
    //         <Link
    //           to={"/editequipment/" + currentEquipment.Equipment_ID}
    //           className="badge badge-warning"
    //         >
    //           Edit
    //         </Link>
    //       </div>
    //     ) : (
    //       <div>
    //         <br />
    //         <p>Please click on a Equipment...</p>
    //       </div>
    //     )}
    //   </div>
    }
    </div>
  );
};

export default EquipmentList;
