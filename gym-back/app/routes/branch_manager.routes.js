module.exports = app => {
    const branch_manager = require("../controllers/branch_manager.controller.js");
    var router = require("express").Router();
    // Create a new Manager
    router.post("/", branch_manager.create);
    // Retrieve all Manager
    router.get("/", branch_manager.findAll);
    //Retrieve all members
    // router.get("/:Branch_ID", branch_manager.findAllMembers);
    // Retrieve a single Manager with id
    router.get("/:Branch_ID", branch_manager.findOne);
    // Update a Manager with Branch_ID
    router.put("/:Branch_ID", branch_manager.update);
    // Delete a Manager with Branch_ID
    router.delete("/:Branch_ID", branch_manager.delete);
    // Delete all Manager
    // router.delete("/", branch_manager.deleteAll);
    app.use('/branch_manager', router);
};