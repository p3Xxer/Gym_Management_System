import React, { useState } from "react";
import PaymentService from "../../services/ManagerService";
import { useParams } from "react-router-dom";

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
    <div className="submit-form">
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
            <label htmlFor="Payment_Desc">Payment_Desc</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={payment.Payment_Desc}
              onChange={handleInputChange}
              name="Payment_Desc"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Payment_Time">Payment_Time</label>
            <input
              type="time"
              className="form-control"
              id="Payment_Time"
              required
              value={payment.Payment_Time}
              onChange={handleInputChange}
              name="Payment_Time"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Payment_Date">Payment_Date</label>
            <input
              type="date"
              className="form-control"
              id="Payment_Date"
              required
              value={payment.Payment_Date}
              onChange={handleInputChange}
              name="Payment_Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Payment_Amt">Payment_Amt</label>
            <input
              type="number"
              className="form-control"
              id="Payment_Amt"
              required
              value={payment.Payment_Amt}
              onChange={handleInputChange}
              name="Payment_Amt"
            />
          </div>  
          <div className="form-group">
            <label htmlFor="Member_ID">Member_ID</label>
            <input
              type="number"
              className="form-control"
              id="Member_ID"
              required
              value={payment.Member_ID}
              onChange={handleInputChange}
              name="Member_ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Workout_Name">Workout_Name</label>
            <input
              type="text"
              className="form-control"
              id="Workout_Name"
              required
              value={payment.Workout_Name}
              onChange={handleInputChange}
              name="Workout_Name"
            />
          </div>      
          <button onClick={savePayment} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPayment;
