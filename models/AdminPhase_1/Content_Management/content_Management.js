const Sequelize = require("sequelize");

const contentDetail = Sequelize.define("Content", {
    newsSection: {
        type: STRING
    }
})

module.exports = { contentDetails }