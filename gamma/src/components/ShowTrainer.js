import React, { useState, useEffect } from "react";
import TrainerService from "../services/ManagerService";
import { Link ,useParams} from "react-router-dom";


const TrainerList = () => {
    const {id} = useParams();
  const [trainer, setTrainer] = useState([]);
  const [currentTrainer, setCurrentTrainer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchMem_Name, setSearchMem_Name] = useState("");

  useEffect(() => {
    retrieveTrainers();
  }, []);

  const onChangeSearchMem_Name = e => {
    const searchMem_Name = e.target.value;
    setSearchMem_Name(searchMem_Name);
  };

  const retrieveTrainers = () => {
    TrainerService.showTrainer(id)
      .then(response => {
        setTrainer(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTrainers();
    setCurrentTrainer(null);
    setCurrentIndex(-1);
  };

  const setActiveTrainer = (trainer, index) => {
    setCurrentTrainer(trainer);
    setCurrentIndex(index);
  };

//   const removeAllTrainers = () => {
//     TrainerDataService.removeAll()
//       .then(response => {
//         console.log(response.data);
//         refreshList();
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const findByMem_Name = () => {
//     TrainerDataService.findByMem_Name(searchMem_Name)
//       .then(response => {
//         setTrainer(response.data);
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
console.log(trainer)
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Mem_Name"
            //value={searchMem_Name}
            //onChange={onChangeSearchMem_Name}
          />
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
        <h4>Trainers List</h4>

        <ul className="list-group">
          {trainer &&
            trainer.map((trainer, index) => (
              <li
                className={
                  "list-group-item " 
                }
                
                
                key={index}
              >
                {trainer.Trainer_ID    }                  {trainer.Trainer_Desc}   
              </li>
              
              
            ))}
        </ul>

        {
        //     <button
        //   className="m-3 btn btn-sm btn-danger"
        //   onClick={removeAllTrainers}
        // >
        //   Remove All
        // </button>
    }
      </div>
      {
    //       <div className="col-md-6">
    //     {currentTrainer ? (
    //       <div>
    //         <h4>Trainers</h4>
    //         <div>
    //           <label>
    //             <strong>Mem_Name:</strong>
    //           </label>{" "}
             
    //           {currentTrainer.Trainer_ID}
    //         </div>
    //         <Link
    //           to={"/edittrainer/" + currentTrainer.Trainer_ID}
    //           className="badge badge-warning"
    //         >
    //           Edit
    //         </Link>
    //       </div>
    //     ) : (
    //       <div>
    //         <br />
    //         <p>Please click on a Trainer...</p>
    //       </div>
    //     )}
    //   </div>
    }
    </div>
  );
};

export default TrainerList;
