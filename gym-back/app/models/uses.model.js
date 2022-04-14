const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Uses = sequelize.define('uses', {
        Equipment_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true  
        },
        WorkPlan_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true  
        },
        Exercise: {
            type: Sequelize.STRING,
        }
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false,
        });
    return Uses;
};

