const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Equipment = sequelize.define('equipment', {
        // Branch_ID: {
        //     type: Sequelize.INTEGER
        // },
        Equipment_Name: {
            type: Sequelize.STRING
        },
        Equipment_Kind: {
            type: Sequelize.STRING
        },
        Working_Status: {
            type: Sequelize.STRING
        },
    });
    return Equipment;
};

