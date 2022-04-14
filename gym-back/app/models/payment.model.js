const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define('payment', {
        Payment_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        Payment_Desc: {
            type: Sequelize.STRING
        },
        Payment_Time: {
            type: Sequelize.STRING
        },
        Payment_Date: {
            type: Sequelize.STRING
        },
        Payment_Amt: {
            type: Sequelize.FLOAT
        },
        Member_ID: {
            type: Sequelize.INTEGER
        },
        Workout_ID: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
    });
    return Payment;
};

