const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Has = sequelize.define('has', {
        Branch_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'branch_managers',
                key: 'Branch_ID'
            }
        },
        Member_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNULL: false,
            references: {
                model: 'members',
                key: 'Mem_ID'
            }
        },
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false,
        });
    return Has;
};