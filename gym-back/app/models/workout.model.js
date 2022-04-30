const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Workout = sequelize.define('workout', {
        Workout_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        Workout_Name: {
            type: Sequelize.STRING
        },
        Workout_DietChart: {
            type: Sequelize.STRING
        },
        Working_Duration: {
            type: Sequelize.INTEGER
        },
        Workout_Price: {
            type: Sequelize.INTEGER
        }
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false,
        });
    return Workout;
};

