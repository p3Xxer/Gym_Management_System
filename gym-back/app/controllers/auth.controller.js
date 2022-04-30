const db = require("../models");
const config = require("../config/auth.config");
const Manager = db.branch_manager;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    if(req.body.Manager_Email=="admin" || req.body.Manager_Email=="Admin"){
        if(req.body.password=="admin"){
            var token = jwt.sign({id: 1}, config.secret, {
                expiresIn: 86400
            });
    
            return res.status(200).send({
                id: "1",
                branch: "All",
                role: "admin",
                accessToken: token
            });

        }else{
            return res.status(404).send({ message: "Incorrect Password!"});
        }
    }
    else{
        Manager.findOne({
            where: {
                Manager_Email: req.body.Manager_Email
            }
        })
        .then(manager => {
            if(!manager){
                return res.status(404).send({ message: "Manager Not Found!"});
            }
            // var key = "CIPHERKEY";
            // var decipher = CryptoJS.AES.decrypt(manager.dataValues.Password, key).toString(CryptoJS.enc.Utf8);
            // console.log(decipher);
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
                branch: manager.dataValues,
                role: "user",
                accessToken: token
            });

        })
        .catch(err => {
            res.status(500).send({
                message: err
            });
        });
    }
};