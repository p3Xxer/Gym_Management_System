module.exports = app => {
    const manager = require("../controllers/manager.controller.js");
    var router = require("express").Router();
    // Create a new Manager
    router.post("/", manager.create);
    // Retrieve all Manager
    router.get("/", manager.findAll);
    // Retrieve all published Manager
    //router.get("/published", manager.findAllPublished);
    // Retrieve a single Manager with id
    router.get("/:id", manager.findOne);
    // Update a Manager with id
    router.put("/:id", manager.update);
    // Delete a Manager with id
    router.delete("/:id", manager.delete);
    // Delete all Manager
    router.delete("/", manager.deleteAll);
    app.use('/api/manager', router);
};