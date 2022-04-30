import React, { useState, useEffect } from "react";
import PaymentService from "../../services/ManagerService";
import { Link, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import "../Member/Member.css";
import image from "../../Images/home.jpeg"
import "../table.css"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const PaymentList = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState([]);
  const [currentPayment, setCurrentPayment] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchMem_Name, setSearchMem_Name] = useState("");

  useEffect(() => {
    retrievePayments();
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


  const retrievePayments = () => {
    PaymentService.showPayment(id)
      .then(response => {
        setPayment(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrievePayments();
    setCurrentPayment(null);
    setCurrentIndex(-1);
  };

  const setActivePayment = (payment, index) => {
    setCurrentPayment(payment);
    setCurrentIndex(index);
  };

  console.log(payment)
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
      <div className="" align="center" margin-left="auto" margin-right="auto" width="50%" vertical-align="center" textAlign='center'>
        <h4 className="lab">PAYMENTS LIST</h4>
        <Table striped hover class="table" variant="dark" align="center" dataAlign="center" style={{background: 'black', opacity: '1'}}>
          <thead class="thead-primary">
            <tr>

              <th>ID</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Time</th>
              <th>Member ID</th>
              <th>Workout ID</th>
            </tr>
          </thead>
          <tbody>
          {payment.map((payment, index) => (
            <tr>
              <td class="scope">{payment.Payment_ID}</td>
              <td>{payment.Payment_Desc}</td>
              <td>{payment.Payment_Amt}</td>
              <td>{payment.Payment_Date}</td>
              <td>{payment.Payment_Time}</td>
              <td>{payment.Member_ID}</td>
              <td>{payment.Workout_ID}</td>
            </tr>
          ))}
          </tbody>
        </Table>

        {/* <ul className="list-group">
          {payment &&
            payment.map((payment, index) => (
              <li
                className={
                  "list-group-item "
                }


                key={index}
              >
                {payment.Payment_ID}                  {payment.Payment_Desc}
              </li>


            ))}
        </ul> */}

        {
          //     <button
          //   className="m-3 btn btn-sm btn-danger"
          //   onClick={removeAllPayments}
          // >
          //   Remove All
          // </button>
        }
      </div>
      {
        //       <div className="col-md-6">
        //     {currentPayment ? (
        //       <div>
        //         <h4>Payments</h4>
        //         <div>
        //           <label>
        //             <strong>Mem_Name:</strong>
        //           </label>{" "}

        //           {currentPayment.Payment_ID}
        //         </div>
        //         <Link
        //           to={"/editpayment/" + currentPayment.Payment_ID}
        //           className="badge badge-warning"
        //         >
        //           Edit
        //         </Link>
        //       </div>
        //     ) : (
        //       <div>
        //         <br />
        //         <p>Please click on a Payment...</p>
        //       </div>
        //     )}
        //   </div>
      }
      <img src={image} id="imgt2" />
    </div>
  );
};

export default PaymentList;
