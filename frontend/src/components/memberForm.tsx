import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useForm, Controller } from "react-hook-form"
import { useHistory } from "react-router"
import {
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  FormLabel,
} from "@material-ui/core"
import { useTypedSelector } from "../reducers/formReducers"
import { createMember, updateMember } from "../actions/formActions"

// Messages
const required = "This field is required"
const maxLength = "Your input exceed maximum length"

// Error Component
const errorMessage = (error: any) => {
  return <span className="invalid-feedback">{error}</span>
}

function MemberForm(props: { data?: any; update?: boolean }) {
  const formData = useTypedSelector((state) => state.formData)
  let history = useHistory()
  const { loading, error } = formData
  const dispatch = useDispatch()
  useEffect(() => {
    if (props.update && !props.data) {
      history.push("/")
    }
  }, [history, props.update, props.data])
  const defaultValues = {
    password: (props.data && props.data.password) || "",
    username: (props.data && props.data.username) || "",
    name: (props.data && props.data.name) || "",
    email: (props.data && props.data.email) || "",
    mobileNumber: (props.data && props.data.mobileNumber) || "",
    gender: (props.data && props.data.gender) || "",
    point: (props.data && props.data.point) || "",
  }

  const { register, errors, handleSubmit, control } = useForm({ defaultValues })

  const onSubmit = (data: {}) => {
    console.log({data:data})
    props.data
      ? dispatch(
          updateMember(data, props.data._id, () =>
            history.push("/updatesuccess")
          )
        )
      : dispatch(createMember(data, () => history.push("/success")))
  }

  const errorText = (
    field: any | undefined,
    type: string,
    msgVar: string
  ) => {
    return field && field.type === type && errorMessage(msgVar)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}
      </div>
      <TextField
        type="text"
        label="Username"
        inputRef={register({ required: true, maxLength: 20 })}
        name="username"
        variant="outlined"
        error={
          (errors.username && errors.username.type === "required") ||
          (errors.username && errors.username.type === "maxLength")
        }
        helperText={
          errorText(errors.username, "required", required) ||
          errorText(errors.username, "maxLength", maxLength)
        }
      />

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
        type="tel"
        label="Mobile number"
        inputRef={register({ maxLength: 12 })}
        name="mobileNumber"
        variant="outlined"
        error={errors.mobileNumber && errors.mobileNumber.type === "maxLength"}
        helperText={errorText(errors.mobileNumber, "maxLength", maxLength)}
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

      <TextField
        type="text"
        label="Point"
        name="point"
        inputRef={register()}
        variant="outlined"
        error={errors.point && errors.point.type === "required"}
        helperText={errorText(errors.point, "required", required)}
      />

      <div style={{ padding: "8px" }}>
        <FormLabel component="legend">Gender</FormLabel>
        <Controller
          as={
            <RadioGroup aria-label="gender" row>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          }
          name="gender"
          control={control}
        />
      </div>
      <div style={{ padding: "0 8px 8px 8px" }}>
        <Button variant="contained" color="primary" type="submit">
          submit
        </Button>
      </div>
    </form>
  )
}

export default MemberForm
