import Form from "../models/formModel"
import express, { Request, Response } from 'express'
import {getToken, isAuth} from "../util"
const router = express.Router()

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

router.put('/:id', isAuth, async (req, res) => {
  const userId = req.params.id;
  const form = await Form.findById(userId);
  if (form) {
    form.name = req.body.name || form.name; 
    form.password = req.body.password || form.password;
    const updatedform = await Form.save();
    res.send({
      _id: updatedform.id,
      name: updatedform.name, 
      token: getToken(updatedform),
    });
  } else {
    res.status(404).send({ message: 'member Not Found' });
  }
});


module.exports = router
