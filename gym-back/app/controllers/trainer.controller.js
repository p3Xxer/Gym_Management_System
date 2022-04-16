const req = require("express/lib/request");
const db = require("../models");
const Trainer = db.trainer;
const { Op } = require("sequelize");
const Workout = db.workout;
exports.create = (req, res) => {
    if (!req.body.Trainer_Name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    console.log(req.body.Workout_Name)
    Workout.findAll({
        attributes: ['Workout_ID'],
        where: {Workout_Name: req.body.Workout_Name}
    }).then(val => {
        if(val[0]){
            console.log("Found");
            console.log(val[0].dataValues.Workout_ID)
            const trainer = {
                Trainer_Name: req.body.Trainer_Name,
                Gender: req.body.Gender,
                Blood_Type: req.body.Blood_Type,
                Phone: req.body.Phone,
                Address: req.body.Address,
                Emer_Name: req.body.Emer_Name,
                Emer_Mobile: req.body.Emer_Mobile,
                Branch_ID: req.params.Branch_ID,
                Workout_ID: val[0].dataValues.Workout_ID
            }
            Trainer.create(trainer)
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the Trainer."
                    });
                });
        }else {
            res.status(404).send({
                message: `Cannot find Workout with Name=${req.body.Workout_Name}.`
            });
        }
    })
};


exports.findAll = (req, res) => {
    Trainer.findAll({ where: {Branch_ID: req.params.Branch_ID} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving trainer."
            });
        });
};

exports.findOne = (req, res) => {
    const Trainer_ID = req.params.Trainer_ID;
    Trainer.findByPk(Trainer_ID)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Trainer.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Trainer"
            });
        });
};

exports.update = (req, res) => {
    const Trainer_ID = req.params.Trainer_ID;
    Trainer.update(req.body, {
        where: { Trainer_ID: Trainer_ID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Trainer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Trainer`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Trainer"
            });
        });
};

exports.delete = (req, res) => {
    const Trainer_ID = req.params.Trainer_ID;
    Trainer.destroy({
        where: { Trainer_ID: Trainer_ID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Trainer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Trainer`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Trainer"
            });
        });
};

exports.deleteAll = (req, res) => {
    Trainer.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Trainers were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while removing all Trainers."
        });
    });
};