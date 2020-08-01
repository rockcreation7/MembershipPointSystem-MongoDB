import React from "react"
import { BrowserRouter, Route, useHistory} from "react-router-dom"
import { Typography, ButtonGroup, Button} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PageSubmit from "./pages/PageSubmit"
import ThreeDPage from "./pages/ThreeDPage"
import "./App.css" 
import "./App.sass" // demo of importing sass

function Menu() {
  let history = useHistory();
 
  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
    >
      <Button onClick={()=>history.push("/")}>Form</Button> 
      <Button onClick={()=>history.push("/3dpage")}>3D Demo</Button> 
    </ButtonGroup>
  );
}

// use css in js
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    margin: "0 auto",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "24px",
    borderRadius: "4px",
    marginTop: "24px",
    "& .MuiButtonGroup-root":{
      margin: "10px 0 20px 0"
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& button[type='submit'].MuiButton-containedPrimary": {
      marginTop: "12px",
    },
  },
}))

function App() {
  const classes = useStyles() 

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Membership entry
        </Typography>
        <Menu/>  
        <Route path="/" exact={true} component={PageSubmit} />
        <Route path="/3dpage" component={ThreeDPage} />
      </div>
    </BrowserRouter>
  )
}

export default App
