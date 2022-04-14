const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Trains = sequelize.define('trains', {
        Trainer_ID: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        WorkPlan_ID: {
            primaryKey: true,
            type: Sequelize.INTEGER
        }
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false,
        });
    return Trains;
};