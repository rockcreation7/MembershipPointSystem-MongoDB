const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const formSchema = new Schema({
  Username: String,
  Name: String,
  MobileNumber: { type: Number, unique: true },
  Email: { type: String, unique: true },
  Password: String,
  Gender: String,
  point: Number
});

formSchema.plugin(uniqueValidator)
module.exports = mongoose.model("form", formSchema)
