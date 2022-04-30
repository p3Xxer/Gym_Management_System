module.exports = app => {
    const equipment = require("../controllers/equipment.controller.js");
    var router = require("express").Router();
    // Create a new Equipment
    router.post("/:Branch_ID", equipment.create);
    // Retrieve all Equipment
    router.get("/:Branch_ID", equipment.findAll);
    // Retrieve all published Equipment
    //router.get("/published", equipment.findAllPublished);
    // Retrieve a single Equipment with id
    router.get("/detail/:id", equipment.findOne);
    // Update a Equipment with id
    router.put("/:id", equipment.update);
    // Delete a Equipment with id
    router.delete("/:id", equipment.delete);
    // Delete all Equipment
    router.delete("/", equipment.deleteAll);
    app.use('/equipment', router);
};