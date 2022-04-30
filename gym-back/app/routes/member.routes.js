module.exports = app => {
    const member = require("../controllers/member.controller.js");
    var router = require("express").Router();
    // Create a new Member
    router.post("/:Branch_ID", member.create);
    // Retrieve all Member angreji beat pe
    router.get("/:Branch_ID", member.findAll);
    // Retrieve a single Member with id
    router.get("/detail/:Mem_ID", member.findOne);
    // Update a Member with Mem_ID
    router.put("/:Mem_ID", member.update);
    // Delete a Member with Mem_ID
    router.delete("/:Mem_ID", member.delete);

    app.use('/member', router);
};