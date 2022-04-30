const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define('member', {

        Mem_ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
            //defaultValue: Sequelize.UUIDV4,
        },
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
            type: Sequelize.STRING
        },
        Address: {
            type: Sequelize.STRING
        },
        Emer_Name: {
            type: Sequelize.STRING
        },
        Emer_Mobile: {
            type: Sequelize.STRING
        },
        WorkoutPlan_ID: {
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
    return Member;

};

