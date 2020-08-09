"use strict";
var jwt = require("jsonwebtoken");
var config = require("./config");
var getToken = function (admin) {
    console.log(admin, config.JWT_SECRET);
    return jwt.sign({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        isAdmin: admin.isAdmin,
    }, config.JWT_SECRET, {
        expiresIn: "48h",
    });
};
module.exports = { getToken: getToken };
