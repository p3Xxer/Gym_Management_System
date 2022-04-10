const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Equipment = sequelize.define('equipment', {
        Equipment_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Equipment_Name: {
            type: Sequelize.STRING
        },
        Equipment_Kind: {
            type: Sequelize.STRING
        },
        Working_Status: {
            type: Sequelize.STRING
        },
    },
    {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
    });
    return Equipment;
};

