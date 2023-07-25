const sequelize = require ('../dbConnection');
const Admin = require ('./admin');
const Student = require ('./student.js');
const Course = require ('./course');

const db = {};

const models = {
  Student,
  Course,
  Admin,
};

sequelize.models = models;
db.sequelize = sequelize;

module.exports = {db, models};
