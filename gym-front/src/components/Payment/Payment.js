import React, { useEffect, useState } from "react";
import PaymentService from "../../services/ManagerService";
import { useParams } from "react-router-dom";
import image from "../../Images/home1.jpeg"
import image1 from "../../Images/payment.png"
import "../Member/Member.css";
import Input from "react-validation/build/input";
import { Card } from "react-bootstrap";
import Form from "react-validation/build/form";
import { useRef } from "react";
const AddPayment = () => {
    const {id}=useParams();
    const form = useRef();
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
  const [member,setMember] = useState([]);
  const retrieveMembers = () => {
    PaymentService.getAll(id)
      .then(response => {
        setMember(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  const [workout,setWorkout] = useState([]);
  const retrieveWorkouts = () => {
    PaymentService.getAllWorkout()
      .then(response => {
        setWorkout(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveMembers();
    retrieveWorkouts();
  }, []);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setPayment({ ...payment, [name]: value });
  };

  let temp = null;
  const workoutPrice = () => 
  {
    console.log(payment.Workout_Name)
    workout&&workout.map((workout,index)=>(
      (
        workout.Workout_Name===payment.Workout_Name?workout.Workout_Price: 500
      )
    ))
    console.log(temp);
  }

  const savePayment = (e) => {
    var data = {
      Payment_Desc:payment.Payment_Desc,
      Payment_Time:payment.Payment_Time,
      Payment_Date:payment.Payment_Date,
      Payment_Amt: e.currentTarget[3].value,
      Member_ID:payment.Member_ID,
      Workout_Name:payment.Workout_Name
    };
    e.preventDefault();


    if(window.confirm("Want to submit?")){
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
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        setPayment(initialPaymentState);
        window.location.reload();
    }
  };

  return (
    <div>
    <img src={image} id="imgt2" />
    <div className="member-submit-form" id="member">
    <br />
    <br />
    <br />
    <br />
    <Form onSubmit={savePayment} ref={form} style={{width: "320px", padding: "30px", paddingTop: "100px"}}>
    <Card style={{ height: '60rem', width: '50rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '0', background: 'transparent', borderColor: 'transparent' }}>
        <div>
          {
          //   <div className="form-group">
          //   <label className="lab" align = "center" htmlFor="Payment_Desc">Payment Description</label>
          //   <input
          //     type="text"
          //     className="form-control int"
          //     id="title"
          //     required
          //     value={payment.Payment_Desc}
          //     onChange={handleInputChange}
          //     name="Payment_Desc"
          //   />
          // </div>
        }
        <div className="form-group">
          <label className="lab" align = "center" htmlFor="Workout_Name">Payment Description</label>
        <select className="form-control int" name="Payment_Desc" required value={payment.Payment_Desc} onChange={handleInputChange} >
          <option hidden value=''>Payment Desc</option>
          
          <option className="form-control int"
          id="Workout_Name"
          value="Credit Card">Credit Card</option>
          <option className="form-control int"
          id="Workout_Name"
          value="Debit Card">Debit Card</option>
          <option className="form-control int"
          id="Workout_Name"
          value="Cash">Cash</option>
          <option className="form-control int"
          id="Workout_Name"
          value="UPI">UPI</option>
          </select>
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
                  type="text"
                  className="form-control int"
                  id="Payment_Amt"
                  placeholder
                  name="Payment_Amt"
                />
            {
              workout&&workout.map((workout,index)=>(
                workout.Workout_Name===payment.Workout_Name?
                <input
                  type="number"
                  className="form-control int"
                  id="Payment_Amt"
                  readOnly
                  value={workout.Workout_Price}
                  name="Payment_Amt"
                />:<input
                  type="number"
                  className="form-control int"
                  id="Payment_Amt"
                  readOnly
                  hidden
                  name="Payment_Amt"
                />
                    )
                  )
            }                   
          </div>  
          {
          //   <div className="form-group">
          //   <label className="lab" align = "center" htmlFor="Member_ID">Member ID</label>
          //   <input
          //     type="number"
          //     className="form-control int"
          //     id="Member_ID"
          //     required
          //     value={payment.Member_ID}
          //     onChange={handleInputChange}
          //     name="Member_ID"
          //   />
          // </div>
        }
        <div className="form-group">
          <label className="lab" align = "center" htmlFor="Member_ID">Member_ID</label>
          <select className="form-control int" name="Member_ID" required value={payment.Member_ID} onChange={handleInputChange} >
          <option hidden value=''>Select Member</option>
          {member && member.map((member,index)=>(
            <option
            type="text"
            className="form-control"
            id="Member_ID"
            value={member.Mem_ID}
            required
          > {member.Mem_ID}</option>))}
          </select>
        </div>
          {
          //   <div className="form-group">
          //   <label className="lab" align = "center" htmlFor="Workout_Name">Workout Name</label>
          //   <input
          //     type="text"
          //     className="form-control int"
          //     id="Workout_Name"
          //     required
          //     value={payment.Workout_Name}
          //     onChange={handleInputChange}
          //     name="Workout_Name"
          //   />
          // </div>
        }
        <div className="form-group">
          <label className="lab" align = "center" htmlFor="Workout_Name">Workout Name</label>
          <select className="form-control int" name="Workout_Name" required value={payment.Workout_Name} onChange={handleInputChange} >
          <option hidden value=''>Select Workout</option>
          {workout && workout.map((workout,index)=>(
            <option
            type="text"
            className="form-control"
            id="Workout_Name"
            value={workout.Workout_Name}
            required
            
          > {workout.Workout_Name}</option>))
          
          }
          </select>
        </div>
          <br />
          <br />      
          <button class="btn btn-outline-info tempBtn">Submit</button>
        </div>
      </Card>
      </Form>
    </div>
    <img src={image1} id="imgt4" />
    </div>
  );
};

export default AddPayment;
