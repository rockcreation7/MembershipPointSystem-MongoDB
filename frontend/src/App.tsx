import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import {CreateMember, UpdateMember} from "./pages/MemberSubmit" 
import MemberCreateSuccess from "./pages/MemberCreateSuccess"
import MemberUpdateSuccess from "./pages/MemberUpdateSuccess"
import ThreeDPage from "./pages/ThreeDPage"
import SigninScreen from "./pages/SigninScreen"
import MemberList from "./pages/MemberList"
import RegisterScreen from "./pages/RegisterScreen"
import Menu from './components/menu'
import "./App.css"
import "./App.sass" // demo of importing sass

// use css in js
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    margin: "0 auto",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "24px",
    borderRadius: "4px",
    marginTop: "24px",
    "& .MuiButtonGroup-root": {
      margin: "10px 0 20px 0",
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
        <Menu />
        <Route path="/" exact={true} component={CreateMember} />
        <Route path="/memberupdate/:id" component={UpdateMember} />
        <Route path="/memberlist" component={MemberList} />
        <Route path="/success" component={MemberCreateSuccess} />
        <Route path="/updatesuccess" component={MemberUpdateSuccess} />
        <Route path="/3dpage" component={ThreeDPage} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/register" component={RegisterScreen} />
      </div>
    </BrowserRouter>
  )
}

export default App
