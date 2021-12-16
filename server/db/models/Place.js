const Sequelize = require('sequelize');
const db = require('../db')

const Place = db.define('place', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  priceRange: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});
