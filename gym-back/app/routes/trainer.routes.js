module.exports = app => {
    const trainer = require("../controllers/trainer.controller.js");
    var router = require("express").Router();
    
    router.post("/:Branch_ID", trainer.create);
    
    router.get("/:Branch_ID", trainer.findAll);
    
    router.get("/detail/:Trainer_ID", trainer.findOne);
    
    router.put("/:Trainer_ID", trainer.update);
    
    router.delete("/:Trainer_ID", trainer.delete);
    
    router.delete("/", trainer.deleteAll);
    app.use('/trainer', router);
};