const jwt = require("jsonwebtoken")
const config = require("./config")

const getToken = (admin) => {
  console.log(admin, config.JWT_SECRET)
  return jwt.sign(
    {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
    },
    config.JWT_SECRET,
    {
      expiresIn: "48h",
    }
  )
}
module.exports = { getToken }
