const req = require("express/lib/request");
const db = require("../models");
const Member = db.member;
const Branch_Manager = db.branch_manager;
const Has = db.has;
const { Op } = require("sequelize");
const { branch_manager } = require("../models");
//Create and Save a new Member
exports.create = (req, res) => {
    branch_id = req.params.Branch_ID;
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
    console.log("Enteres");
    Member.create(member)
        .then(data => {
            console.log("Enteres");
            Has.create({
                Branch_ID: branch_id,
                Member_ID: data.Mem_ID
            });
            console.log("Enteres");
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Member."
            });
        });
};

exports.findAll = (req, res) => {
    const bid = req.params.Branch_ID;

    Has.findAll({
        attributes: ['Member_ID'],
        where: {Branch_ID: bid}
    }).then(data => {
        const memid = []
        for(var i in data){
            memid.push(data[i].dataValues.Member_ID);
        }
        console.log(memid);
        Member.findAll({where: {Mem_ID: memid}})
            .then(val => {
                res.send(val);
            })
    })
};

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

exports.delete = (req, res) => {
    const Mem_ID = req.params.Mem_ID;
    Has.destroy({
        where: {Member_ID: Mem_ID}
    }).then(n => {
        if(n==1){
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
                        message: err.message || "Cannot delete"
                    });
                });
        }else{
            res.send({
                message: `Cannot delete Member with Mem_ID=${Mem_ID}.`
            });
        }
    })
};

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