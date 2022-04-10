const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define('member', {
        // Mem_ID: {
        //     type: Sequelize.INTEGER
        // },
        Mem_Name: {
            type: Sequelize.STRING
        },
        Mem_Weight: {
            type: Sequelize.FLOAT
        },
        Mem_Height: {
            type: Sequelize.FLOAT
        },
        Age: {
            type: Sequelize.INTEGER
        },
        Gender: {
            type: Sequelize.STRING
        },
        Blood_Type: {
            type: Sequelize.STRING
        },
        Mobile_Number: {
            type: Sequelize.INTEGER
        },
        Address: {
            type: Sequelize.STRING
        },
        Emer_Name: {
            type: Sequelize.STRING
        },
        Emer_Mobile: {
            type: Sequelize.INTEGER
        },
    });
    return Member;

};

