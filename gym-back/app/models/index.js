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


// Associations
db.branch_manager.hasMany(db.equipment, {
    sourceKey: 'Manager_ID',
    //require testing
    //foreignKey: 'Manager_ID'
});

db.equipment.belongsTo(db.branch_manager, {
    //require testing
    targetKey: 'Manager_ID',
    //foreignKey: 'Manager_ID',
});

db.branch_manager.hasMany(db.trainer, {
    foreignKey: 'Branch_ID'
});

db.trainer.belongsTo(db.branch_manager, {
    foreignKey: 'Branch_ID'
})

db.workout.hasMany(db.member, {
    foreignKey: 'Workout_ID'
});
db.member.belongsTo(db.workout, {
    foreignKey: 'Workout_ID',
});

db.branch_manager.belongsToMany(db.member, { through: db.has });
db.member.belongsToMany(db.branch_manager, { through: db.has });

db.member.hasMany(db.payment, {
    foreignKey: 'Member_ID'
});
db.payment.belongsTo(db.member, {
    foreignKey: 'Member_ID',
});

db.workout.hasMany(db.payment, {
    foreignKey: 'Workout_ID'
});
db.payment.belongsTo(db.workout, {
    foreignKey: 'Workout_ID',
});

db.equipment.belongsToMany(db.workout, { through: db.uses });
db.workout.belongsToMany(db.equipment, { through: db.uses });

db.trainer.belongsToMany(db.workout, { through: db.trains});
db.workout.belongsToMany(db.trainer, { through: db.trains});

module.exports = db;