import React, { useState, useEffect } from "react";
import ManagerService from "../services/ManagerService";
import { Link ,useParams} from "react-router-dom";
import {Table} from "react-bootstrap";

const MemberList = () => {
    const {id} = useParams();
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
const deleteMember=(Mem_ID)=>{
  console.log(Mem_ID);
  ManagerService.removeMember(Mem_ID)
  .then(response =>{
    console.log(response.data);
    refreshList();
  })
}

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
         { 
          //  <input
          //   type="text"
          //   className="form-control"
          //   placeholder="Search by Mem_Name"
          //   value={searchMem_Name}
          //   onChange={onChangeSearchMem_Name}
          // />
        }
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
        <h4>Members List</h4>

        <Table striped bordered hover variant="dark">
        <thead>
              <tr>
                
                <th>Member id</th>
                <th>Member Name</th>
                <th>Member Phone</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
          {member &&
            member.map((member, index) => (
              <tr>
                <td>{member.Mem_ID}</td>
                <td>{member.Mem_Name}</td>
                <td>{member.Mobile_Number}</td>
                <td><Link
                to={"/editmember/" + member.Mem_ID}
                className="badge badge-warning">
                Edit
              </Link></td>
              <td><button className="m-3 btn-sm btn-danger" onClick={()=>{deleteMember(member.Mem_ID)}}>Delete</button></td>
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
