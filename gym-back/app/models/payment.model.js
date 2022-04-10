const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define('payment', {
        // Branch_ID: {
        //     type: Sequelize.INTEGER
        // },
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
    });
    return Payment;
};

