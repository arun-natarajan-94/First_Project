const Sequelize = require("sequelize");
const { INTEGER } = require("sequelize");

const adminDetails = Sequelize.define("adminDetails", {
    adminId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    adminName: {
        type: STRING
    },
    password: {
        type: STRING
    }
});