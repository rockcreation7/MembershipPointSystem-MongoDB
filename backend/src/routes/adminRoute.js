const express = require("express")
const Admin = require("../models/adminModel")
const {getToken} = require("../util")

const router = express.Router()

router.post("/signin", async (req, res) => { 
  const signinAdmin = await Admin.findOne({
    email: req.body.email,
    password: req.body.password,
  })
  if (signinAdmin) {
    res.send({
      _id: signinAdmin.id,
      name: signinAdmin.name,
      email: signinAdmin.email,
      isAdmin: signinAdmin.isAdmin,
      token: getToken(signinAdmin),
    })
  } else {
    res.status(401).send({ msg: "Invaild Email or password" })
  }
})

router.post("register", async (req, res) => {
  const admin = new Admin({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  const newAdmin = await admin.save()
  if (newUser) {
    res.send({
      _id: newAdmin.id,
      name: newAdmin.name,
      email: newAdmin.email,
      isAdmin: newAdmin.isAdmin,
      token: getToken(newAdmin)
    })
  } else {
    res.status(401).send({
      msg: "Invalid Admin Data"
    })
  }
})

router.get("/createadmin", async (req, res) => {
  try {
    const admin = new Admin({
      name: "rock",
      email: "rockcreation7@gmail.com",
      password: "1234",
      isAdmin: true,
    })
    const newAdmin = await admin.save()
    res.send(newAdmin)
  } catch (error) {
    res.send({
      msg: error.message,
    })
  }
})

module.exports = router
