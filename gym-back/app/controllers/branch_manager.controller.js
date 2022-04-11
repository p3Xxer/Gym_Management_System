const req = require("express/lib/request");
const db = require("../models");
//const Manager = db.manager;
const Branch_Manager = db.Branch_Manager;
const Op = db.Sequelize.Op;
console.log(db);
//Create and Save a new Manager
exports.create = (req, res) => {
    //Validate request
    if (!req.body.Manager_Name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    // Create a Manager
    const branch_manager = {
        //Manger_ID: req.body.Manger_ID,
        Branch_Name: req.body.Branch_Name,
        Branch_Location: req.body.Branch_Location,
        Branch_Email: req.body.Branch_Email,
        Branch_Phone_Number: req.body.Branch_Phone_Number,
        Manager_Name: req.body.Manager_Name,
        Gender: req.body.Gender,
        Mobile_Number: req.body.Mobile_Number,
        Address: req.body.Address,
        Manager_Email: req.body.Manager_Email,
        Password: req.body.Password,
    }
    Branch_Manager.create(branch_manager)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Manager."
            });
        });
};


// Retrieve all Manager from the database.
exports.findAll = (req, res) => {
    const Manager_Name = req.query.Manager_Name;
    var condition = Manager_Name ? { Manager_Name: { [Op.like]: `%${Manager_Name}%` } } : null;
    Branch_Manager.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Manager."
            });
        });
};
// Find a single Manager with an id
exports.findOne = (req, res) => {
    const Branch_ID = req.params.Branch_ID;
    Branch_Manager.findByPk(Branch_ID)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Manager with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Manger with id=" + id
            });
        });
};
// Update a Manager by the id in the request
exports.update = (req, res) => {
    const Branch_ID = req.params.Branch_ID;
    Branch_Manager.update(req.body, {
        where: { Branch_ID: Branch_ID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Manager was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Manager with id=${id}. Maybe Manager was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Manager with id=" + id
            });
        });
};
// Delete a Manager with the specified id in the request
exports.delete = (req, res) => {
    const Branch_ID = req.params.Branch_ID;
    Branch_Manager.destroy({
        where: { Branch_ID: Branch_ID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Manager was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Manager with id=${id}. Maybe Manger was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Manager with id=" + id
            });
        });
};
// Delete all Manager from the database.
// exports.deleteAll = (req, res) => {
//     Branch_Manager.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({ message: `${nums} Manager were deleted successfully!` });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all Manager."
//             });
//         });
// };
