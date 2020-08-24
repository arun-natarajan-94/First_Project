const Sequelize = require("sequelize");

const uploadCourse = Sequelize.define("course", {
    courseId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    coruseName: {
        type: STRING
    }
});

module.exports = { uploadCourse } 