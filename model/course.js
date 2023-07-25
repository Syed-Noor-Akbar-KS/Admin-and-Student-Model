const {DataTypes, Model} = require ('sequelize');
const sequelize = require ('../dbConnection');
// const sequelize = require ('../../bin/dbConnection');

class Course extends Model {}

Course.init (
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    coursecode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    crdhrs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    lab: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: 'Course',
  }
);

module.exports = Course;
