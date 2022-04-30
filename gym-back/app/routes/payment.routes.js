module.exports = app => {
    const payment = require("../controllers/payment.controller.js");
    var router = require("express").Router();
    // Create a new Payment
    router.post("/", payment.create);
    // Retrieve all Payment
    router.get("/:Branch_ID", payment.findAll);
    // Retrieve all published Payment
    //router.get("/published", payment.findAllPublished);
    // Retrieve a single Payment with id
    router.get("/details/:Member_ID", payment.findOne);
    // Update a Payment with id
    // router.put("/:Payment_ID", payment.update);
    // Delete a Payment with id
    router.delete("/:Payment_ID", payment.delete);
    // Delete all Payment
    // router.delete("/", payment.deleteAll);
    app.use('/payment', router);
};