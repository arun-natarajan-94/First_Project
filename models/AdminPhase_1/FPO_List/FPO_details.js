const Sequelize = require("sequelize");

const FPOdetails = Sequelize.define("FPO", {
    name: {
        type: STRING
    },
    location: {
        type: STRING
    },
    documetName: {
        type: STRING
    }
});