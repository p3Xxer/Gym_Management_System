const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Trains = sequelize.define('trains', {
        Trainer_ID: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            references: {
                model: 'trainers',
                key: 'Trainer_ID'
            }
        },
        WorkPlan_ID: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            references: {
                model: 'workouts',
                key: 'Workout_ID'
            }
        }
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false,
        });
    return Trains;
};