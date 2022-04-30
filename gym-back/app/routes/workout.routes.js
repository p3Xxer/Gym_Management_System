module.exports = app => {
    const workout = require("../controllers/workout.controller.js");
    var router = require("express").Router();
    // Create a new Workout
    router.post("/", workout.create);
    // Retrieve all Workout
    router.get("/", workout.findAll);
    // Retrieve all published Workout
    //router.get("/published", workout.findAllPublished);
    // Retrieve a single Workout with id
    router.get("/detail/:id", workout.findOne);
    // Update a Workout with id
    router.put("/:id", workout.update);
    // Delete a Workout with id
    router.delete("/:id", workout.delete);
    // Delete all Workout
    router.delete("/", workout.deleteAll);
    app.use('/workout', router);
};