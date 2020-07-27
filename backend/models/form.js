const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema

const formSchema = new Schema({
  userName: String,
  name: String,
  mobileNumber: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  gender: String
});

formSchema.plugin(uniqueValidator)
module.exports = mongoose.model("form", formSchema);
