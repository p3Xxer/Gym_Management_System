const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Branch = sequelize.define('branch', {
        // Branch_ID: {
        //     type: Sequelize.INTEGER
        // },
        Branch_Location: {
            type: Sequelize.STRING
        },
        Branch_Email: {
            type: Sequelize.STRING
        },
        Phone_Number: {
            type: Sequelize.INTEGER
        },
    });
    return Branch;
};


