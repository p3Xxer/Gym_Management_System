const req = require("express/lib/request");
const { branch_manager } = require("../models");
const db = require("../models");
const Branch_Manager = db.branch_manager;
const Op = db.Sequelize.Op;
const CryptoJS = require("crypto-js");
var x = 1004;

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
    // var key = "CIPHERKEY";
    // var cipher = CryptoJS.AES.encrypt(req.body.Password, key).toString();
    // console.log("Password: ");
    // console.log(cipher);
    const branch_manager = {
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
            console.log("test2");
            x=x+1
            res.send(data);
        })
        .catch(err => {
            console.log("3");
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Manager."
            });
        });
};


// Retrieve all Manager from the database.
exports.findAll = (req, res) => {
    Branch_Manager.findAll()
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

exports.managerBoard = (req, res) => {
    res.status(200).send("Manager Content.");
}