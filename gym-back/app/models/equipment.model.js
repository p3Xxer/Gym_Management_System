const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Equipment = sequelize.define('equipment', {
        Equipment_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
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
        Exercise: {
            type: Sequelize.STRING
        },
        Branch_ID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'branch_managers',
                key: 'Branch_ID'
            }
        }
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false,
        });
    return Equipment;
};

