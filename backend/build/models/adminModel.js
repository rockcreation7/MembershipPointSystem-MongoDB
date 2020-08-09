"use strict";
var mongoose = require('mongoose');
var adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
});
var adminModel = mongoose.model("Admin", adminSchema);
module.exports = adminModel;
