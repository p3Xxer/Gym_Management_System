const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Equipment = sequelize.define('equipment', {
        Workout_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Workout_Name: {
            type: Sequelize.STRING
        },
        Diet_Chart: {
            type: Sequelize.STRING
        }
    },
    {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
    });
    return Equipment;
};

