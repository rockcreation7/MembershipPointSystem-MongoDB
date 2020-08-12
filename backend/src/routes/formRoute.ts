import Form from "../models/formModel"
import express, { Request, Response } from "express"
import { getToken, isAuth } from "../util"
const router = express.Router()

router.route("/list").get(async (req: Request, res: Response) => {
  try {
    const forms = await Form.find()
    res.send(forms)
  } catch {
    res.status(400).send({ message: "Error on list" })
  }
})

router.route("/").post(async (req: Request, res: Response) => {
  const form = new Form({
    username: req.body.username,
    name: req.body.name,
    mobileNumber: req.body.mobileNumber,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    point: req.body.point,
  })
  try {
    const newForm = await form.save()
    res.send({
      _id: newForm.id,
      name: newForm.name,
      email: newForm.email,
    })
    console.log("success")
  } catch (err) {
    console.log(err)
    res.status(400).send({ message: "Invalid Form Data." })
  }
})

router.put("/:id", isAuth, async (req: Request, res: Response) => { 
  const formId = req.params.id
  const form = await Form.findById(formId)
  if (form) {
    form.name = req.body.name || form.name
    form.username = req.body.username || form.username
    form.mobileNumber = req.body.mobileNumber || form.mobileNumber
    form.password = req.body.password || form.password
    form.email = req.body.email || form.email
    form.gender = req.body.gender || form.gender
    form.point = req.body.point || form.point
    const updatedform = await form.save().catch((err: any) => {
      console.log(err)
    })
    res.send({
      _id: updatedform.id,
      name: updatedform.name,
      token: getToken(updatedform),
    })
  } else {
    res.status(404).send({ message: "No permission" })
  }
})

router.delete("/:id", isAuth, async (req, res) => { 
  const member = await Form.findOne({ _id: req.params.id })
  if (member) {
    const deletedMember = await member.remove()
    res.send(deletedMember)
  } else {
    res.status(404).send("Member Not Found.")
  }
})

module.exports = router
