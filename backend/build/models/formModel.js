"use strict";
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var formSchema = new Schema({
    Username: String,
    Name: String,
    MobileNumber: { type: Number, unique: true },
    Email: { type: String, unique: true },
    Password: String,
    Gender: String,
    point: Number
});
formSchema.plugin(uniqueValidator);
module.exports = mongoose.model("form", formSchema);
