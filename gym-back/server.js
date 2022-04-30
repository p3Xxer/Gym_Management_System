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

db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.");
    initialize();
});

function initialize(){
    branch_manager.create({
        Branch_Name: "Malaviya",
        Branch_Location: "Jaipur",
        Branch_Email: "malaviya@gmail.com",
        Branch_Phone_Number: "9876579889",
        Manager_ID: "1001",
        Manager_Name: "Khushil",
        Gender: "Male",
        Mobile_Number: "8769876789",
        Address: "Airport Colony",
        Manager_Email: "khushil@gmail.com",
        Password: "khushil",
    })

    branch_manager.create({
        Branch_Name: "Gotri",
        Branch_Location: "Vadodara",
        Branch_Email: "gotri@gmail.com",
        Branch_Phone_Number: "8798767898",
        Manager_ID: "1002",
        Manager_Name: "Dhairya",
        Gender: "Male",
        Mobile_Number: "9974253776",
        Address: "Kishan Duplex",
        Manager_Email: "dhairya@gmail.com",
        Password: "dhairya",
    })

    branch_manager.create({
        Branch_Name: "Dharavi",
        Branch_Location: "Mumbai",
        Branch_Email: "dharavi@gmail.com",
        Branch_Phone_Number: "7895499876",
        Manager_ID: "1003",
        Manager_Name: "rahil",
        Gender: "Male",
        Mobile_Number: "7897876789",
        Address: "Bandra Station",
        Manager_Email: "rahil@gmail.com",
        Password: "rahil",
    })

    workout.create({
        Workout_Name: "Beginner",
        Workout_DietChart: "Proteins and Carbohydrates",
        Working_Duration: "3",
        Workout_Price: "3000"
    })

    workout.create({
        Workout_Name: "Intermediate",
        Workout_DietChart: "Vitamins and Carbohydrates",
        Working_Duration: "5",
        Workout_Price: "5000"
    })

    workout.create({
        Workout_Name: "Advanced",
        Workout_DietChart: "Whey and Casein",
        Working_Duration: "9",
        Workout_Price: "9000"
    })

    workout.create({
        Workout_Name: "Expert",
        Workout_DietChart: "Whey and Casein",
        Working_Duration: "12",
        Workout_Price: "15000"
    })
}

//db.sequelize.sync();

require("./app/routes/member.routes.js")(app);
require("./app/routes/branch_manager.routes.js")(app);
require("./app/routes/payment.routes.js")(app);
require("./app/routes/auth.routes.js")(app);
require("./app/routes/manager.routes.js")(app);
require("./app/routes/equipment.routes.js")(app);
require("./app/routes/workout.routes.js")(app);
require("./app/routes/trainer.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});