const {DataTypes, Model} = require ('sequelize');
const sequelize = require ('../dbConnection');
// const sequelize = require ('../../bin/dbConnection');

class Student extends Model {}

Student.init (
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      // unique: true,
      allowNull: false,
    },
    RegNo: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'student',
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: 'Student',
  }
);

module.exports = Student;
