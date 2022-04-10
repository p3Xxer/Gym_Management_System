const req = require("express/lib/request");
const db = require("./app/models");
//const Eqiupment = db.equipment;
const Payment = db.Payment;
const Op = db.Sequelize.Op;
//Create and Save a new Payment
//Doesnot make sense
exports.create = (req, res) => {
    //Validate request
    if (!req.body.Payment_Name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Payment
    const payment = {
        //Branch_ID: req.body.Branch_ID,
        Payment_Desc: req.body.Payment_Desc,
        Payment_Time: req.body.Payment_Time,
        Payment_Date: req.body.Payment_Date,
        Payment_Amt: req.body.Payment_Amt,
    }
    Payment.create(payment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Payment."
            });
        });
};


// Retrieve all Payment from the database.
exports.findAll = (req, res) => {
    const Workout_Name = req.query.Workout_Name;
    var condition = Workout_Name ? { Workout_Name: { [Op.like]: `%${Workout_Name}%` } } : null;
    Payment.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Payment."
            });
        });
};
// Find a single Payment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Payment.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Payment with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Payment with id=" + id
            });
        });
};
// Update a Payment by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Payment.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Payment was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Payment with id=${id}. Maybe Payment was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Payment with id=" + id
            });
        });
};
// Delete a Payment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Payment.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Payment was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Payment with id=${id}. Maybe Payment was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Payment with id=" + id
            });
        });
};
// Delete all Payment from the database.
exports.deleteAll = (req, res) => {
    Payment.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Payment were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Payment."
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