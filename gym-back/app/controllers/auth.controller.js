const db = require("../models");
const config = require("../config/auth.config");
const Manager = db.branch_manager;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    Manager.findOne({
        where: {
            Manager_Email: req.body.Manager_Email
        }
    })
    .then(manager => {
        if(!manager){
            return res.status(404).send({ message: "Manager Not Found!"});
        }

        var passwordIsValid = req.body.password==manager.dataValues.Password

        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        var token = jwt.sign({id: manager.dataValues.Manager_ID}, config.secret, {
            expiresIn: 86400
        });

        res.status(200).send({
            id: manager.dataValues.Branch_ID,
            email: manager.dataValues.Manager_Email,
            accessToken: token
        });

    })
    .catch(err => {
        res.status(500).send({
            message: err
        });
    });
};