import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    Typography,
    FormControlLabel,
    RadioGroup,
    Radio,
    Button
  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import logo from './logo.svg';
import './App.css';

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = error => {
  return <div className="invalid-feedback">{error}</div>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '500px',
    margin: '0 auto',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '24px',
    borderRadius: '4px',
    marginTop: '24px',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    },
    '& .MuiButton-containedPrimary': {
      marginTop: '12px',
    }
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  console.log(errors);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const errorText = (field, type, msgVar) => {
    return field && field.type === type && errorMessage(msgVar)
  }





  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Membership entry
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>

        <TextField
          type="text"
          label="Username"
          inputRef={register({ required: true, maxLength: 20 })}
          name="Username"
          variant="outlined"
          error={
            errors.Username && errors.Username.type === "required" ||
            errors.Username && errors.Username.type === "maxLength"
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
            errors.Name && errors.Name.type === "required" ||
            errors.Name && errors.Name.type === "maxLength"
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
          error={
            errors.MobileNumber && errors.MobileNumber.type === "maxLength"
          }
          helperText={
            errorText(errors.MobileNumber, "maxLength", maxLength)
          }
        />

        <TextField
          type="email"
          label="Email"
          inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
          name="Email"
          variant="outlined"
          error={
            errors.Email && errors.Email.type === "required"
          }
          helperText={
            errorText(errors.Email, "required", required)
          }
        />

        <TextField
          type="text"
          label="Password"
          inputRef={register({ required: true })}
          name="Password"
          variant="outlined"
          error={
            errors.Password && errors.Password.type === "required"
          }
          helperText={
            errorText(errors.Password, "required", required)
          }
        />

        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange} 
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          submit
        </Button>

      </form>
    </div>
  );
}

export default App;
