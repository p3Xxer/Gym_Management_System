import React, { useState, useEffect } from "react";
import PaymentService from "../../services/ManagerService";
import { Link, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import "../Member/Member.css";
import image from "../../Images/home.jpeg"

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

  //   const removeAllPayments = () => {
  //     PaymentDataService.removeAll()
  //       .then(response => {
  //         console.log(response.data);
  //         refreshList();
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   };

  //   const findByMem_Name = () => {
  //     PaymentDataService.findByMem_Name(searchMem_Name)
  //       .then(response => {
  //         setPayment(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   };
  console.log(payment)
  return (
    <div className="list row" align="center">
      <img src={image} id="imgt2" />
      <div className="" align="center" margin-left="auto" margin-right="auto" width="50%" vertical-align="center" textAlign='center'>
        <h4 className="lab">PAYMENTS LIST</h4>
        <br />
        <Table striped hover variant="dark" align="center" dataAlign="center" style={{ background: "black", opacity: "0.7", textAlign: "center", borderRadius: '20px', verticalAlign: 'center' }}>
          <thead>
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

          {payment.map((payment, index) => (
            <tr>
              <td>{payment.Payment_ID}</td>
              <td>{payment.Payment_Desc}</td>
              <td>{payment.Payment_Amt}</td>
              <td>{payment.Payment_Date}</td>
              <td>{payment.Payment_Time}</td>
              <td>{payment.Member_ID}</td>
              <td>{payment.Workout_ID}</td>
            </tr>
          ))}
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
    </div>
  );
};

export default PaymentList;
