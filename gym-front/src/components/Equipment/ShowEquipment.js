import React, { useState, useEffect } from "react";
import EquipmentService from "../../services/ManagerService";
import { Link, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import image from "../../Images/home.jpeg"
import "../table.css"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
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

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
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

  const deleteEquipment=(Equipment_ID) => {
    console.log(Equipment_ID);
    if(window.confirm("Do you want to delete this entry?")){
    EquipmentService.removeEquipment(Equipment_ID)
      .then(response => {
        console.log(response.data);
        refreshList();
      })
    }
  }
  console.log(equipment)
  return (
    <div className="list row" align="center">
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
        <h4 className="lab">Equipments List</h4>
        <Table striped hover class="table" variant="dark" align="center" dataAlign="center" style={{background: 'black', opacity: '1'}}>
          <thead class="thead-primary">
            <tr>

              <th>Equipment ID</th>
              <th>Equipment Name</th>
              <th>Equipment Kind</th>
              <th>Working Status</th>
              <th>Exercise</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {equipment.map((equipment, index) => (
            <tr>
              <td class="scope">{equipment.Equipment_ID}</td>
              <td>{equipment.Equipment_Name}</td>
              <td>{equipment.Equipment_Kind}</td>
              <td>{equipment.Working_Status}</td>
              <td>{equipment.Exercise}</td>

              <td>
                <Link
                  to={"/editequipment/" + equipment.Equipment_ID}
                  class="btn btn-primary pqy">
                    Edit
                </Link>
              </td>
               <td><button class="btn-danger btn btn-primary pqy" onClick={() => { deleteEquipment(equipment.Equipment_ID)}}>Delete</button></td>
            </tr>
          ))}
          </tbody>
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
      <img src={image} id="imgt2" />
    </div >
  );
};

export default EquipmentList;
