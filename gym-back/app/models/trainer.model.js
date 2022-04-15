const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Trainer = sequelize.define('trainer', {
        Trainer_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        Trainer_Name: {
            type: Sequelize.STRING
        },
        Gender: {
            type: Sequelize.STRING
        },
        Blood_Type: {
            type: Sequelize.STRING
        },
        Phone: {
            type: Sequelize.INTEGER
        },
        Address: {
            type: Sequelize.STRING
        },
        Emer_Mobile: {
            type: Sequelize.INTEGER
        },
        Emer_Name: {
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
    return Trainer;
};

