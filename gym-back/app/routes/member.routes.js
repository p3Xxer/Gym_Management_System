module.exports = app => {
    const member = require("../controllers/member.controller.js");
    var router = require("express").Router();
    // Create a new Member
    router.post("/", member.create);
    // Retrieve all Member
    router.get("/", member.findAll);
    // Retrieve all published Member
    //router.get("/published", member.findAllPublished);
    // Retrieve a single Member with id
    router.get("/:id", member.findOne);
    // Update a Member with id
    router.put("/:id", member.update);
    // Delete a Member with id
    router.delete("/:id", member.delete);
    // Delete all Member
    router.delete("/", member.deleteAll);
    app.use('/api/member', router);
};