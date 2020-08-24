const Sequelize = require("sequelize");
const { INTEGER } = require("sequelize");

const roleDetails = Sequelize.define("Role", {
    roleId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roleName: {
        type: STRING
    }
})