const req = require("express/lib/request");
const db = require("./app/models");
//const Manager = db.manager;
const Manager = db.Manager;
const Op = db.Sequelize.Op;
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
    const branch = {
        //Manger_ID: req.body.Manger_ID,
        Manager_Name: req.body.Manager_Name,
        Gender: req.body.Gender,
        Mobile_Number: req.body.Mobile_Number,
        Address: req.body.Address,
        Manager_Email: req.body.Manager_Email,
        Password: req.body.Password
    }
    Manger.create(manager)
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


// Retrieve all Manger from the database.
exports.findAll = (req, res) => {
    const Manager_Name = req.query.Manager_Name;
    var condition = Manager_Name ? { Manager_Name: { [Op.like]: `%${Manager_Name}%` } } : null;
    Manager.findAll({ where: condition })
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
// Find a single Manger with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Manager.findByPk(id)
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
    const id = req.params.id;
    Manager.update(req.body, {
        where: { id: id }
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
    const id = req.params.id;
    Manager.destroy({
        where: { id: id }
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
exports.deleteAll = (req, res) => {
    Manager.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Manager were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Manager."
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