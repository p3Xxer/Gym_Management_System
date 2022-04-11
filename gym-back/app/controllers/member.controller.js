const req = require("express/lib/request");
const db = require("../models");
const Member = db.member;
const { Op } = require("sequelize");
//Create and Save a new Member
exports.create = (req, res) => {
    console.log(req);
    //ValMem_IDate request
    if (!req.body.Mem_Name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Member
    const member = {
        Mem_Name: req.body.Mem_Name,
        Mem_Weight: req.body.Mem_Weight,
        Mem_Height: req.body.Mem_Height,
        Age: req.body.Age,
        Gender: req.body.Gender,
        Blood_Type: req.body.Blood_Type,
        Mobile_Number: req.body.Mobile_Number,
        Address: req.body.Address,
        Emer_Name: req.body.Emer_Name,
        Emer_Mobile: req.body.Emer_Mobile
    }
    Member.create(member)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Member."
            });
        });
};


// Retrieve all Members from the database.
exports.findAll = (req, res) => {
    const Mem_Name = req.query.Mem_Name;
    var condition = Mem_Name ? { Mem_Name: { [Op.like]: `%${Mem_Name}%` } } : null;
    Member.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving members."
            });
        });
};
// Find a single Member with an Mem_ID
exports.findOne = (req, res) => {
    const Mem_ID = req.params.Mem_ID;
    Member.findByPk(Mem_ID)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Member with Mem_ID=${Mem_ID}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Member with Mem_ID=" + Mem_ID
            });
        });
};
// Update a Member by the Mem_ID in the request
exports.update = (req, res) => {
    const Mem_ID = req.params.Mem_ID;
    Member.update(req.body, {
        where: { Mem_ID: Mem_ID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Member was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Member with Mem_ID=${Mem_ID}. Maybe Member was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Member with Mem_ID=" + Mem_ID
            });
        });
};
// Delete a Member with the specified Mem_ID in the request
exports.delete = (req, res) => {
    const Mem_ID = req.params.Mem_ID;
    Member.destroy({
        where: { Mem_ID: Mem_ID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Member was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Member with Mem_ID=${Mem_ID}. Maybe Member was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Member with Mem_ID=" + Mem_ID
            });
        });
};
// Delete all Members from the database.
exports.deleteAll = (req, res) => {
    Member.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Members were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Members."
            });
        });
};
// Find all published Members
// Not meaningfull for our project
// exports.findAllPublished = (req, res) => {
    // Member.findAll({ where: { published: true } })
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