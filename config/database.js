const Sequelize = require('sequelize');

//Creating connection
const sequelize = new Sequelize('node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });

module.exports = sequelize