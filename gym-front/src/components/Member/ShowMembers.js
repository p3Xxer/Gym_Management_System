import React, { useState, useEffect } from "react";
import ManagerService from "../../services/ManagerService";
import { Link, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import "./Member.css";
import image from "../../Images/home.jpeg"
import "../table.css"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
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

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
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

  const deleteMember = (Mem_ID) => {
    console.log(Mem_ID);
    if(window.confirm("Do you want to delete this entry?")){
    ManagerService.removeMember(Mem_ID)
      .then(response => {
        console.log(response.data);
        refreshList();
      })
    }
  }

  return (
    <div className="list row" align="center">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
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
      <div class="" align="center" margin-left="auto" margin-right="auto" width="50%" vertical-align="center" textAlign='center'>
        <h4 className="lab">MEMBERS LIST</h4>
        <Table striped bordered hover variant="dark" class="table" align="center" dataAlign="center" style={{background: 'black', opacity: '1'}}>
          <thead class="thead-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Age</th>
              <th>Gender</th>
              <th>BloodGroup</th>
              <th>Address</th>
              <th>EmergencyName</th>
              <th>EmergencyMobile</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {member &&
            member.map((member, index) => (
              <tr>
                <td class="scope">{member.Mem_ID}</td>
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
                <td>
                  <Link style={{ textAlign: "left" }}
                    to={"/editmember/" + member.Mem_ID}
                    class="btn btn-primary pqy">
                    Edit
                  </Link>
                </td>
                <td><button class="btn-danger btn btn-primary pqy" onClick={() => { deleteMember(member.Mem_ID) }}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <img src={image} id="imgt2" />
    </div>
  );
};

export default MemberList;
