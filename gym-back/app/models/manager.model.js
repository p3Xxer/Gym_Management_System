const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Manager = sequelize.define('manager', {
        // Mem_ID: {
        //     type: Sequelize.INTEGER
        // },
        Manager_Name: {
            type: Sequelize.STRING
        },
        Gender: {
            type: Sequelize.STRING
        },
        Mobile_Number: {
            type: Sequelize.INTEGER
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
    });
    return Manager;
};

