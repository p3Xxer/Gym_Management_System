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
            type: Sequelize.INTEGER,
            references: {
                model: 'members',
                key: 'Mem_ID'
            }
        },
        Workout_ID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'workouts',
                key: 'Workout_ID'
            }
        }
    },
    {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
    });
    return Payment;
};

