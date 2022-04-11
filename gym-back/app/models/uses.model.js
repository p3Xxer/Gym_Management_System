const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Uses = sequelize.define('uses', {
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

