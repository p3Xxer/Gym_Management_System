import React, { useState, useEffect } from "react";
import ManagerService from "../../services/ManagerService";
import { Link, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import "./Member.css";
import image from "../../Images/home.jpeg"
const MemberList = () => {
  const { id } = useParams();
  const [member, setMember] = useState([]);
  const [currentMember, setCurrentMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchMem_Name, setSearchMem_Name] = useState("");

  useEffect(() => {
    retrieveMembers();
  }, []);

  const onChangeSearchMem_Name = e => {
    const searchMem_Name = e.target.value;
    setSearchMem_Name(searchMem_Name);
  };

  const retrieveMembers = () => {
    ManagerService.getAll(id)
      .then(response => {
        setMember(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveMembers();
    setCurrentMember(null);
    setCurrentIndex(-1);
  };

  const setActiveMember = (member, index) => {
    setCurrentMember(member);
    setCurrentIndex(index);
  };

  //   const removeAllMembers = () => {
  //     MemberDataService.removeAll()
  //       .then(response => {
  //         console.log(response.data);
  //         refreshList();
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   };

  //   const findByMem_Name = () => {
  //     MemberDataService.findByMem_Name(searchMem_Name)
  //       .then(response => {
  //         setMember(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   };
  const deleteMember = (Mem_ID) => {
    console.log(Mem_ID);
    ManagerService.removeMember(Mem_ID)
      .then(response => {
        console.log(response.data);
        refreshList();
      })
  }

  return (
    <div className="list row" align="center">
      <img src={image} id="imgt2" />
      <div className="" align="center" margin-left="auto" margin-right="auto" width="50%" vertical-align="center" textAlign='center'>
        <h4 className="lab">MEMBERS LIST</h4>
        <br />
        <Table striped hover variant="dark" align="center" dataAlign="center" style={{ background: "black", opacity: "0.7", textAlign: "center", borderRadius: '20px', verticalAlign: 'center' }}>
          <thead>
            <tr>

              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Address</th>
              <th>Emergency Name</th>
              <th>Emergency Mobile</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          {member &&
            member.map((member, index) => (
              <tr>
                <td>{member.Mem_ID}</td>
                <td>{member.Mem_Name}</td>
                <td>{member.Mobile_Number}</td>
                <td>{member.Mem_Weight}</td>
                <td>{member.Mem_Height}</td>
                <td>{member.Age}</td>
                <td>{member.Gender}</td>
                <td>{member.Blood_Type}</td>
                <td>{member.Address}</td>
                <td>{member.Emer_Name}</td>
                <td>{member.Emer_Mobile}</td>
                <td align="right"><button className="btn-danger pqy" align="left" onClick={() => { deleteMember(member.Mem_ID) }}>Delete</button>
                  <Link style={{ textAlign: "left" }}
                    to={"/editmember/" + member.Mem_ID}
                    className="badge badge-warning pqy">
                    Edit
                  </Link></td>
              </tr>
            ))}
        </Table>

        {
          //     <button
          //   className="m-3 btn btn-sm btn-danger"
          //   onClick={removeAllMembers}
          // >
          //   Remove All
          // </button>
        }
      </div>
      {
        //   <div className="col-md-6">
        //   {currentMember ? (
        //     <div>
        //       <h4>Members</h4>
        //       <div>
        //         <label>
        //           <strong>Mem_Name:</strong>
        //         </label>{" "}

        //         {currentMember.Mem_ID}
        //       </div>
        //       <Link
        //         to={"/editmember/" + currentMember.Mem_ID}
        //         className="badge badge-warning"
        //       >
        //         Edit
        //       </Link>
        //     </div>
        //   ) : (
        //     <div>
        //       <br />
        //       <p>Please click on a Member...</p>
        //     </div>
        //   )}
        // </div>
      }
    </div>
  );
};

export default MemberList;
