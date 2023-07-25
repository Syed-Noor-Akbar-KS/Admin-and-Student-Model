const config = require ('./config.json');
const {Sequelize} = require ('sequelize');

const dataBase = new Sequelize (config.db);
dataBase
  .authenticate ()
  .then (() => {
    console.log ('Database Connection established');
  })
  .catch (err => {
    console.log ('Error connecting to database ', err);
  });

module.exports = dataBase;
