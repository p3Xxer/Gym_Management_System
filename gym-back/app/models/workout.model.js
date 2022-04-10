const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Equipment = sequelize.define('equipment', {
        // Branch_ID: {
        //     type: Sequelize.INTEGER
        // },
        Workout_Name: {
            type: Sequelize.STRING
        },
        Diet_Chart: {
            type: Sequelize.STRING
        }
    });
    return Equipment;
};

