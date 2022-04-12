const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Trains = sequelize.define('trains', {
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false,
        });
    return Trains;
};

