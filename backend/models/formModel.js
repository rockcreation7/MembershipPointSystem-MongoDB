const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema

const formSchema = new Schema({
  Username: String,
  Name: String,
  MobileNumber: { type: String, unique: true },
  Email: { type: String, unique: true },
  Password: String,
  Gender: String
});

formSchema.plugin(uniqueValidator)
module.exports = mongoose.model("form", formSchema);
