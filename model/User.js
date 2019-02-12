const Sequelize = require('sequelize');
const db = require('../config/database')

const User = db.define('articles', {
    title: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  },{
    timestamps: false // timestamps will now be false
  });

module.exports = User;