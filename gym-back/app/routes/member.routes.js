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
    router.get("/:Mem_ID", member.findOne);
    // Update a Member with Mem_ID
    router.put("/:Mem_ID", member.update);
    // Delete a Member with Mem_ID
    router.delete("/:Mem_ID", member.delete);
    // Delete all Member
    router.delete("/", member.deleteAll);
    app.use('/api/member', router);
};