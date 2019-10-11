require('dotenv').config()
const mongoose = require('mongoose')
const models = require('./schemas')
const helpers = require('./helpers')

const getUsers = async (req, res, next) => {
  const mongoDbURI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  
  mongoose.set('useUnifiedTopology', true);
  mongoose.connect(mongoDbURI, { useNewUrlParser: true })

  let db = mongoose.connection
  db.once('open', () => console.log('connected to the database'))
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))

  try {
    const monRes = await models.Users.find()
      .limit(helpers.toNumber(req.query.limit))
      .skip(helpers.toNumber(req.query.offset))

    res.status(200).json(monRes)
  } catch (err) {
    res.status(404).json({
      message: '404, Nothing here!',
      error: true
    })
  }
}

module.exports = {
  getUsers
}
