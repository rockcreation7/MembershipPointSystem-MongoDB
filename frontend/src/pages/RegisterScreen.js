import React, { useEffect } from "react" 
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form" 
import { TextField, Button } from "@material-ui/core"
import { registerAdmin } from "../actions/adminActions"

const required = "This field is required"
const maxLength = "Your input exceed maximum length"

const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>
}

function RegisterScreen(props) {
  const adminRegister = useSelector((state) => state.adminRegister) 
  const { loading, adminInfo, error } = adminRegister
  const dispatch = useDispatch()

  const defaultValues = {
    password: "",
    name: "",
    email: "",
  }
  const { register, errors, handleSubmit } = useForm({ defaultValues })

  useEffect(() => {
    if (adminInfo) {
      props.history.push("/")
    }
    return () => {
      //
    }
  }, [adminInfo, props.history])

  const onSubmit = (data) => {
    console.log(data)
    dispatch(
      registerAdmin(data.name, data.email, data.password)
    )
  }

  const errorText = (field, type, msgVar) => {
    return field && field.type === type && errorMessage(msgVar)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>{console.log(error)}</div>}
      </div>

      <TextField
        type="text"
        label="Name"
        inputRef={register({ required: true, maxLength: 50 })}
        name="name"
        variant="outlined"
        error={
          (errors.name && errors.name.type === "required") ||
          (errors.name && errors.name.type === "maxLength")
        }
        helperText={
          errorText(errors.name, "required", required) ||
          errorText(errors.name, "maxLength", maxLength)
        }
      />

      <TextField
        type="email"
        label="Email"
        inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
        name="email"
        variant="outlined"
        error={errors.email && errors.email.type === "required"}
        helperText={errorText(errors.email, "required", required)}
      />

      <TextField
        type="text"
        label="Password"
        inputRef={register({ required: true })}
        name="password"
        variant="outlined"
        error={errors.password && errors.password.type === "required"}
        helperText={errorText(errors.password, "required", required)}
      />

      <Button variant="contained" color="primary" type="submit">
        submit
      </Button>
    </form>
  )
}
export default RegisterScreen
