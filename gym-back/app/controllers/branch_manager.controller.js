const req = require("express/lib/request");
const { branch_manager } = require("../models");
const db = require("../models");
const Branch_Manager = db.branch_manager;
const Op = db.Sequelize.Op;
var x = 1001;
//console.log(db);
//Create and Save a new Manager
exports.create = (req, res) => {
    //Validate request
    if (!req.body.Manager_Name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if (!req.body.Branch_Name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Manager
    const branch_manager = {
        //Manger_Branch_ID: req.body.Manger_Branch_ID,
        Branch_Name: req.body.Branch_Name,
        Branch_Location: req.body.Branch_Location,
        Branch_Email: req.body.Branch_Email,
        Branch_Phone_Number: req.body.Branch_Phone_Number,
        Manager_ID: x,
        Manager_Name: req.body.Manager_Name,
        Gender: req.body.Gender,
        Mobile_Number: req.body.Mobile_Number,
        Address: req.body.Address,
        Manager_Email: req.body.Manager_Email,
        Password: req.body.Password,
    }
    Branch_Manager.create(branch_manager)
        .then(data => {
            x=x+1
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

// Find a single Manager with an Branch_ID
exports.findOne = (req, res) => {
    const Branch_ID = req.params.Branch_ID;
    Branch_Manager.findByPk(Branch_ID)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Manager with Branch_ID=${Branch_ID}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Manger with Branch_ID=" + Branch_ID
            });
        });
};

// Update a Manager by the Branch_ID in the request
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
                    message: `Cannot update Manager with Branch_ID=${Branch_ID}. Maybe Manager was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Manager with Branch_ID=" + Branch_ID
            });
        });
};
// Delete a Manager with the specified Branch_ID in the request
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
                    message: `Cannot delete Manager with Branch_ID=${Branch_ID}. Maybe Manger was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Manager with Branch_ID=" + Branch_ID
            });
        });
};

