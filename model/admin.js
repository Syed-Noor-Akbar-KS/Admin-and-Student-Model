const {DataTypes, Model} = require ('sequelize');
const sequelize = require ('../dbConnection');
// const sequelize = require ('../../bin/dbConnection');

class Admin extends Model {}

Admin.init (
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      //   unique: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'Admin',
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: 'Admin',
  }
);

module.exports = Admin;
