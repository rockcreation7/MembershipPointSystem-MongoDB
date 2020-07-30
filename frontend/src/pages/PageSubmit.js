import React, { useEffect } from "react"
import {
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core"
import { useForm, Controller } from "react-hook-form"
import { formSubmit } from "../actions/formActions"
import { useSelector, useDispatch } from "react-redux"

// Messages
const required = "This field is required"
const maxLength = "Your input exceed maximum length"

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>
}

function PageSubmit(props) {
  const formData = useSelector((state) => state.formData)
  const { success, loading, error } = formData

  useEffect(() => {
    if (success) {
      props.history.push("/success")
    }
    return () => {
      //
    }
  }, [success])

  const dispatch = useDispatch()

  const defaultValues = {
    Password: "",
    Username: "",
    Name: "",
    email: "",
    MobileNumber: "",
    Gender: "",
  }

  const { register, errors, handleSubmit, control } = useForm({ defaultValues })

  const onSubmit = (data) => {
    console.log(data)
    dispatch(formSubmit(data))
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
        label="Username"
        inputRef={register({ required: true, maxLength: 20 })}
        name="Username"
        variant="outlined"
        error={
          (errors.Username && errors.Username.type === "required") ||
          (errors.Username && errors.Username.type === "maxLength")
        }
        helperText={
          errorText(errors.Username, "required", required) ||
          errorText(errors.Username, "maxLength", maxLength)
        }
      />

      <TextField
        type="text"
        label="Name"
        inputRef={register({ required: true, maxLength: 50 })}
        name="Name"
        variant="outlined"
        error={
          (errors.Name && errors.Name.type === "required") ||
          (errors.Name && errors.Name.type === "maxLength")
        }
        helperText={
          errorText(errors.Name, "required", required) ||
          errorText(errors.Name, "maxLength", maxLength)
        }
      />

      <TextField
        type="tel"
        label="Mobile number"
        inputRef={register({ maxLength: 12 })}
        name="MobileNumber"
        variant="outlined"
        error={errors.MobileNumber && errors.MobileNumber.type === "maxLength"}
        helperText={errorText(errors.MobileNumber, "maxLength", maxLength)}
      />

      <TextField
        type="email"
        label="Email"
        inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
        name="Email"
        variant="outlined"
        error={errors.Email && errors.Email.type === "required"}
        helperText={errorText(errors.Email, "required", required)}
      />

      <TextField
        type="text"
        label="Password"
        inputRef={register({ required: true })}
        name="Password"
        variant="outlined"
        error={errors.Password && errors.Password.type === "required"}
        helperText={errorText(errors.Password, "required", required)}
      />

      <Controller
        as={
          <RadioGroup aria-label="gender">
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        }
        name="Gender"
        control={control}
      />

      <Button variant="contained" color="primary" type="submit">
        submit
      </Button>
    </form>
  )
}

export default PageSubmit
