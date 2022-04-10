const req = require("express/lib/request");
const db = require("./app/models");
//const Eqiupment = db.equipment;
const Equipment = db.Equipment;
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
    // Create a Equipment
    const equipment = {
        //Branch_ID: req.body.Branch_ID,
        Equipment_Name: req.body.Equipment_Name,
        Equipment_Kind: req.body.Equipment_Kind,
        Working_Status: req.body.Working_Status,
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


// Retrieve all Equipment from the database.
exports.findAll = (req, res) => {
    const Equipment_Name = req.query.Equipment_Name;
    var condition = Equipment_Name ? { Equipment_Name: { [Op.like]: `%${Equipment_Name}%` } } : null;
    Equipment.findAll({ where: condition })
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
// Find a single Equipment with an id
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
// Update a Equipment by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Equipment.update(req.body, {
        where: { id: id }
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
// Delete a Equipment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Equipment.destroy({
        where: { id: id }
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
// Delete all Equipment from the database.
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
// Find all published Users
// Not meaningfull for our project
// exports.findAllPublished = (req, res) => {
    // User.findAll({ where: { published: true } })
    // .then(data => {
    //   res.send(data);
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while retrieving member."
    //   });
    // });
// };