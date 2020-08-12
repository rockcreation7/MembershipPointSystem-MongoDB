import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { signinAdmin } from "../actions/adminActions"
import { useForm, FieldError } from "react-hook-form"
import { TextField, Button } from "@material-ui/core"
import { useTypedSelector } from "../store"
const required = "This field is required"
const errorMessage = (error: string) => {
  return <div className="invalid-feedback">{error}</div>
}
const errorText = (field: FieldError | undefined, type: string, msgVar: string) => {
  return field && field.type === type && errorMessage(msgVar)
}
function SigninAdminScreen(props: {
  history: { push: (arg: string) => void }
}) {
  const adminSignin = useTypedSelector((state) => state.adminSignin)
  const { loading, adminInfo, error } = adminSignin
  const dispatch = useDispatch()

  useEffect(() => {
    if (adminInfo) {
      props.history.push("/")
    }
  }, [adminInfo, props.history])

  const defaultValues = {
    password: "",
    name: "",
    email: "",
  }

  const { register, errors, handleSubmit } = useForm({ defaultValues })

  const onSubmit = (data: { email: string; password: string }) => { 
    dispatch(signinAdmin(data.email, data.password))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>

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
export default SigninAdminScreen
