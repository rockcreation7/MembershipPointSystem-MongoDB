const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const formSchema = new Schema({
  username: String,
  name: String,
  mobileNumber: { type: Number, unique: true },
  email: { type: String, unique: true },
  password: String,
  gender: String,
  point: Number
});

formSchema.plugin(uniqueValidator)
module.exports = mongoose.model("form", formSchema)
