const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Has = sequelize.define('has', {
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false,
        });
    return Has;
};

