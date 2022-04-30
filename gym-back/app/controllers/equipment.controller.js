const req = require("express/lib/request");
const db = require("../models");
//const Eqiupment = db.equipment;
const Equipment = db.equipment;
const Op = db.Sequelize.Op;
//Create and Save a new Equipment
exports.create = (req, res) => {
    //Validate request
    if (!req.body.Equipment_Name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const equipment = {
        Equipment_Name: req.body.Equipment_Name,
        Equipment_Kind: req.body.Equipment_Kind,
        Working_Status: req.body.Working_Status,
        Exercise: req.body.Exercise,
        Branch_ID: req.params.Branch_ID
    }
    Equipment.create(equipment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Equipment."
            });
        });
};

exports.findAll = (req, res) => {
    Equipment.findAll({ where: {Branch_ID: req.params.Branch_ID} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Equipment."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Equipment.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Equipment with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Equipment with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Equipment.update(req.body, {
        where: { Equipment_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Equipment was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Equipment with id=${id}. Maybe Equipment was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Equipment with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Equipment.destroy({
        where: { Equipment_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Equipment was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Equipment with id=${id}. Maybe Equipment was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Equipment with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Equipment.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Equipment were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Equipment."
            });
        });
};