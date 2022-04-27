import React, { useState } from "react";
import PaymentService from "../../services/ManagerService";
import { useParams } from "react-router-dom";
import image from "../../Images/home.jpeg"
import image1 from "../../Images/payment.png"
import "../Member/Member.css";
import { Card } from "react-bootstrap";
const AddPayment = () => {
    const {id}=useParams();
    console.log(id);
  const initialPaymentState = {
    Payment_Desc:"",
    Payment_Time:"",
    Payment_Date:"",
    Payment_Amt:0,
    Member_ID:0,
    Workout_Name:""
  };
  const [payment, setPayment] = useState(initialPaymentState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPayment({ ...payment, [name]: value });
  };

  const savePayment = () => {
    var data = {
      Payment_Desc:payment.Payment_Desc,
      Payment_Time:payment.Payment_Time,
      Payment_Date:payment.Payment_Date,
      Payment_Amt:payment.Payment_Amt,
      Member_ID:payment.Member_ID,
      Workout_Name:payment.Workout_Name
    };

    PaymentService.createPayment(data)
      .then(response => {
        setPayment({
            Payment_Desc:response.data.Payment_Desc,
            Payment_Time:response.data.Payment_Time,
            Payment_Date:response.data.Payment_Date,
            Payment_Amt:response.data.Payment_Amt,
            Member_ID:response.data.Member_ID,
            Workout_Name:response.data.Workout_Name
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newPayment = () => {
    setPayment(initialPaymentState);
    setSubmitted(false);
  };

  return (
    <div>
    <img src={image} id="imgt2" />
    <div className="member-submit-form" id="member">
    <br />
    <br />
    <br />
    <br />
    <Card style={{ height: '60rem', width: '50rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '0', background: 'transparent', borderColor: 'transparent' }}>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPayment}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Payment_Desc">Payment Description</label>
            <input
              type="text"
              className="form-control int"
              id="title"
              required
              value={payment.Payment_Desc}
              onChange={handleInputChange}
              name="Payment_Desc"
            />
          </div>

          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Payment_Time">Time</label>
            <input
              type="time"
              className="form-control int"
              id="Payment_Time"
              required
              value={payment.Payment_Time}
              onChange={handleInputChange}
              name="Payment_Time"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Payment_Date">Date</label>
            <input
              type="date"
              className="form-control int"
              id="Payment_Date"
              required
              value={payment.Payment_Date}
              onChange={handleInputChange}
              name="Payment_Date"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Payment_Amt">Amount</label>
            <input
              type="number"
              className="form-control int"
              id="Payment_Amt"
              required
              value={payment.Payment_Amt}
              onChange={handleInputChange}
              name="Payment_Amt"
            />
          </div>  
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Member_ID">Member ID</label>
            <input
              type="number"
              className="form-control int"
              id="Member_ID"
              required
              value={payment.Member_ID}
              onChange={handleInputChange}
              name="Member_ID"
            />
          </div>
          <div className="form-group">
            <label className="lab" align = "center" htmlFor="Workout_Name">Workout Name</label>
            <input
              type="text"
              className="form-control int"
              id="Workout_Name"
              required
              value={payment.Workout_Name}
              onChange={handleInputChange}
              name="Workout_Name"
            />
          </div>
          <br />
          <br />      
          <button  onClick={savePayment} class="btn btn-outline-info tempBtn">Submit</button>
        </div>
      )}
      </Card>
    </div>
    <img src={image1} id="imgt4" />
    </div>
  );
};

export default AddPayment;
