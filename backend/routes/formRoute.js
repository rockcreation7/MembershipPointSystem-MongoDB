const Form = require("../models/formModel")
const router = require("express").Router()

router.route("/").post(async (req, res) => {
  const form = new Form({
    Username: req.body.Username,
    Name: req.body.Name,
    MobileNumber: req.body.MobileNumber,
    Email: req.body.Email,
    Password: req.body.Password,
    Gender: req.body.Gender,
  })
  try {
    const newForm = await form.save()
    res.send({
      _id: newForm.id,
      name: newForm.name,
      email: newForm.email
    })
    console.log('success')
  } catch {
    res.send({ message: "Invalid Form Data." })
    console.log('fail')
  }
})

module.exports = router
