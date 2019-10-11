const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
  _id: Number,
  index: Number,
  guid: String,
  isActive: Boolean,
  age: Number,
  name: String,
  lastname: String,
  gender: String,
  company: String,
  email: String,
  phone: String,
  address: String
},
{ collection: 'users' }
)

const Users = mongoose.model('Users', UsersSchema)
module.exports = {
  Users: Users
  // other model
}
