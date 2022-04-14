const dbConfig = require('../config/db.config.js');
const { Sequelize } = require('sequelize');
console.log(dbConfig);
const sequelize = new Sequelize('gym', 'root', dbConfig.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// // we have used users instead of tutorials
db.member = require('./member.model.js')(sequelize, Sequelize);
db.branch_manager = require('./branch_manager.model.js')(sequelize, Sequelize);
db.equipment = require('./equipment.model.js')(sequelize, Sequelize);
db.payment = require('./payment.model.js')(sequelize, Sequelize);
db.workout = require('./workout.model.js')(sequelize, Sequelize);
db.has = require('./has.model.js')(sequelize, Sequelize);
db.uses = require('./uses.model.js')(sequelize, Sequelize);
db.trainer = require('./trainer.model.js')(sequelize, Sequelize);
db.trains = require('./trains.model.js')(sequelize, Sequelize);

module.exports = db;