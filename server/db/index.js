//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Place = require('./models/Place')

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Place
  },
}
