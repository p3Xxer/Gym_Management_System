module.exports = app => {
    const branch_manager = require("../controllers/branch_manager.controller.js");
    var router = require("express").Router();
    // Create a new Manager
    router.post("/", branch_manager.create);
    // Retrieve all Manager
    router.get("/", branch_manager.findAll);
    // Retrieve a single Manager with id
    router.get("/:id", branch_manager.findOne);
    // Update a Manager with id
    router.put("/:id", branch_manager.update);
    // Delete a Manager with id
    router.delete("/:id", branch_manager.delete);
    // Delete all Manager
    router.delete("/", branch_manager.deleteAll);
    app.use('/api/branch_manager', router);
};