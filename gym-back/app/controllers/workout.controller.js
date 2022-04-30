const req = require("express/lib/request");
const db = require("../models");
const Workout = db.workout;
const Op = db.Sequelize.Op;
//Create and Save a new Workout
exports.create = (req, res) => {
    //Validate request
    if (!req.body.Workout_Name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Workout
    const workout = {
        //Branch_ID: req.body.Branch_ID,
        Workout_Name: req.body.Workout_Name,
        Workout_DietChart: req.body.Workout_DietChart,
        Working_Duration: req.body.Working_Duration,
        Workout_Price: req.body.Workout_Price
    }
    Workout.create(workout)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Workout."
            });
        });
};


// Retrieve all Workout from the database.
exports.findAll = (req, res) => {
    Workout.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Workout."
            });
        });
};
// Find a single Workout with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Workout.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Workout with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Workout with id=" + id
            });
        });
};
// Update a Workout by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log("Received");
    Workout.update(req.body, {
        where: { Workout_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Workout was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Workout with id=${id}. Maybe Workout was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Workout with id=" + id
            });
        });
};
// Delete a Workout with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Workout.destroy({
        where: { Workout_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Workout was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Workout with id=${id}. Maybe Workout was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Workout with id=" + id
            });
        });
};
// Delete all Workout from the database.
exports.deleteAll = (req, res) => {
    Workout.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Workout were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Workout."
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