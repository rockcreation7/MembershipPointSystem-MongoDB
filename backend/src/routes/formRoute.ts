const Form = require("../models/formModel")
import express, { Request, Response } from 'express';
const router = express.Router();

router.route("/list").get(async (req:Request, res:Response) => {
  try {
    const forms = await Form.find()
    res.send(forms)
  } catch{
    res.status(400).send({ message: "Error on list" })
  }
});

router.route("/").post(async (req:Request, res:Response) => {
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
    res.status(400).send({ message: "Invalid Form Data." })
  }
})

module.exports = router
