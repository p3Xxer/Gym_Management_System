const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Has = sequelize.define('has', {
        Branch_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        Member_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNULL: false
        },
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false,
        });
    return Has;
};