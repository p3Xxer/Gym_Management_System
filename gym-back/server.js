const expresss = require("express");
const cors = require("cors");
const app = expresss();
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
const db = require("./app/models");
//In development, you may need to drop existing tables and re-sync database.
//Just use force: true as following code:
db.sequelize.sync({ force: true }).then(() => { console.log("Drop and re-sync db."); });
//db.sequelize.sync();

require("./app/routes/member.routes.js")(app);
require("./app/routes/branch_manager.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});