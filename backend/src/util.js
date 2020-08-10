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

const isAuth = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    const onlyToken = token.slice(7, token.length)
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: "Invalid Token" })
      }
      req.admin = decode
      next()
      return
    })
  } else {
    return res.status(401).send({ message: "Token is not supplied." })
  }
}

module.exports = { getToken, isAuth }
