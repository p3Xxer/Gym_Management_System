import React, { useState, useEffect } from "react";
import EquipmentService from "../../services/ManagerService";
import { Link, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import image from "../../Images/home.jpeg"
const EquipmentList = () => {
  const { id } = useParams();
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
    <div className="list row" align="center">
      <img src={image} id="imgt2" />

      <div className="" align="center" margin-left="auto" margin-right="auto" width="50%" vertical-align="center">
        <br />
        <h4 className="lab">Equipments List</h4>
        <br />
        {/* khushil working */}

        <Table striped hover variant="dark" align="center" dataAlign="center" style={{ background: "black", opacity: "0.8", textAlign: "center", borderRadius: '20px', marginInlineStart: '1.5rem' }}>
          <thead>
            <tr>

              <th>Equipment ID</th>
              <th>Equipment Name</th>
              <th>Equipment Kind</th>
              <th>Working Status</th>
              <th>Exercise</th>

              <th>Edit</th>

            </tr>
          </thead>

          {equipment.map((equipment, index) => (
            <tr>
              <td>{equipment.Equipment_ID}</td>
              <td>{equipment.Equipment_Name}</td>
              <td>{equipment.Equipment_Kind}</td>
              <td>{equipment.Working_Status}</td>
              <td>{equipment.Exercise}</td>

              <td>
                <Link
                  to={"/editequipment/" + equipment.Equipment_ID}
                  className="badge badge_warning">Edit</Link>
              </td>
              <td>{/*<button className="m-3 btn-sm btn-danger" onClick={() => { deleteBranch(branch_manager.Branch_ID) }}>Delete</button>*/}</td>
            </tr>
          ))}
        </Table>

        {/* <ul className="list-group">
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
                {equipment.Equipment_ID}                  {equipment.Equipment_Desc}
              </li>


            ))}
        </ul> */}

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
    </div >
  );
};

export default EquipmentList;
