// const req = require("express/lib/request");
// const db = require("./app/models");
// //const Branch = db.branch;
// const Branch = db.Branch;
// const Op = db.Sequelize.Op;
// //Create and Save a new Branch
// exports.create = (req, res) => {
//     //Validate request
//     if (!req.body.Branch_Name) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//         return;
//     }
//     // Create a Branch
//     const branch = {
//         //Branch_ID: req.body.Branch_ID,
//         Branch_Name: req.body.Branch_Name,
//         Branch_Location: req.body.Branch_Location,
//         Branch_Email: req.body.Branch_Email,
//         Phone_Number: req.body.Phone_Number,
//     }
//     Branch.create(branch)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating the Branch."
//             });
//         });
// };


// // Retrieve all Branch from the database.
// exports.findAll = (req, res) => {
//     const Branch_Name = req.query.Branch_Name;
//     var condition = Branch_Name ? { Branch_Name: { [Op.like]: `%${Branch_Name}%` } } : null;
//     Branch.findAll({ where: condition })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving Branch."
//             });
//         });
// };
// // Find a single Branch with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;
//     Branch.findByPk(id)
//         .then(data => {
//             if (data) {
//                 res.send(data);
//             } else {
//                 res.status(404).send({
//                     message: `Cannot find Branch with id=${id}.`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving Branch with id=" + id
//             });
//         });
// };
// // Update a Branch by the id in the request
// exports.update = (req, res) => {
//     const id = req.params.id;
//     Branch.update(req.body, {
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Branch was updated successfully."
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot update Branch with id=${id}. Maybe Branch was not found or req.body is empty!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error updating Branch with id=" + id
//             });
//         });
// };
// // Delete a Branch with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;
//     Branch.destroy({
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Branch was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Branch with id=${id}. Maybe Branch was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete Branch with id=" + id
//             });
//         });
// };
// // Delete all Branch from the database.
// exports.deleteAll = (req, res) => {
//     Branch.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({ message: `${nums} Branch were deleted successfully!` });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all Branch."
//             });
//         });
// };
// // Find all published Users
// // Not meaningfull for our project
// // exports.findAllPublished = (req, res) => {
//     // User.findAll({ where: { published: true } })
//     // .then(data => {
//     //   res.send(data);
//     // })
//     // .catch(err => {
//     //   res.status(500).send({
//     //     message:
//     //       err.message || "Some error occurred while retrieving member."
//     //   });
//     // });
// // };