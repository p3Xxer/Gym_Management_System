const expresss = require("express");
const cors = require("cors");
const app = expresss();
const db = require("./app/models");
const branch_manager = db.branch_manager;
const workout = db.workout;
const member = db.member;
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(expresss.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(expresss.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to GOLDY Gym" });
});
//In development, you may need to drop existing tables and re-sync database.
//Just use force: true as following code:
db.sequelize.sync({force: true}).then(() => { 
    console.log("Drop and re-sync db.");
    initialize();
});

function initialize(){
    branch_manager.create({
        Branch_Name: "1",
        Branch_Location: "1",
        Branch_Email: "1",
        Branch_Phone_Number: "1",
        Manager_ID: "1",
        Manager_Name: "1",
        Gender: "1",
        Mobile_Number: "1",
        Address: "1",
        Manager_Email: "1",
        Password: "1"
    });
    branch_manager.create({
        Branch_Name: "2",
        Branch_Location: "2",
        Branch_Email: "2",
        Branch_Phone_Number: "2",
        Manager_ID: "2",
        Manager_Name: "2",
        Gender: "2",
        Mobile_Number: "2",
        Address: "2",
        Manager_Email: "2",
        Password: "2"
    });
    branch_manager.create({
        Branch_Name: "3",
        Branch_Location: "3",
        Branch_Email: "3",
        Branch_Phone_Number: "3",
        Manager_ID: "3",
        Manager_Name: "3",
        Gender: "3",
        Mobile_Number: "3",
        Address: "3",
        Manager_Email: "3",
        Password: "3"
    });
    workout.create({
        Workout_Name: "Cardio",
        Workout_DietChart: "Banana",
        Workout_Duration: "30"
    })
    workout.create({
        Workout_Name: "Weight Lifting",
        Workout_DietChart: "Egg",
        Workout_Duration: "15"
    })
};
//db.sequelize.sync();

require("./app/routes/member.routes.js")(app);
require("./app/routes/branch_manager.routes.js")(app);
require("./app/routes/payment.routes.js")(app);
require("./app/routes/auth.routes.js")(app);
require("./app/routes/manager.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});