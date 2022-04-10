module.exports = app => {
    const branch = require("../controllers/branch.controller.js");
    var router = require("express").Router();
    // Create a new Branch
    router.post("/", branch.create);
    // Retrieve all Branch
    router.get("/", branch.findAll);
    // Retrieve all published Branch
    //router.get("/published", branch.findAllPublished);
    // Retrieve a single Branch with id
    router.get("/:id", branch.findOne);
    // Update a Branch with id
    router.put("/:id", branch.update);
    // Delete a Branch with id
    router.delete("/:id", branch.delete);
    // Delete all Branch
    router.delete("/", branch.deleteAll);
    app.use('/api/branch', router);
};