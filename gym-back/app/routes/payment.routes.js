module.exports = app => {
    const payment = require("../controllers/payment.controller.js");
    var router = require("express").Router();
    // Create a new Payment
    router.post("/", payment.create);
    // Retrieve all Payment
    router.get("/", payment.findAll);
    // Retrieve all published Payment
    //router.get("/published", payment.findAllPublished);
    // Retrieve a single Payment with id
    router.get("/:id", payment.findOne);
    // Update a Payment with id
    router.put("/:id", payment.update);
    // Delete a Payment with id
    router.delete("/:id", payment.delete);
    // Delete all Payment
    router.delete("/", payment.deleteAll);
    app.use('/api/payment', router);
};