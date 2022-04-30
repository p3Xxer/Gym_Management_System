const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Branch_Manager = sequelize.define('branch_manager', {
        Branch_ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        Branch_Name: {
            type: Sequelize.STRING
        },
        Branch_Location: {
            type: Sequelize.STRING
        },
        Branch_Email: {
            type: Sequelize.STRING,
            unique: true
        },
        Branch_Phone_Number: {
            type: Sequelize.STRING
        },
        Manager_ID: {
            type: Sequelize.INTEGER,
            candidateKey: true,
            allowNull: false,
            unique: true
        },
        Manager_Name: {
            type: Sequelize.STRING
        },
        Gender: {
            type: Sequelize.STRING
        },
        Mobile_Number: {
            type: Sequelize.STRING
        },
        Address: {
            type: Sequelize.STRING
        },
        Manager_Email: {
            type: Sequelize.STRING
        },
        Password: {
            type: Sequelize.STRING
        },
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false,
        });
    return Branch_Manager;
};

