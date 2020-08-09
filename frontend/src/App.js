import React from "react"
import { BrowserRouter, Route, useHistory } from "react-router-dom"
import { Typography, ButtonGroup, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PageSubmit from "./pages/PageSubmit"
import PageSuccess from "./pages/PageSuccess"
import ThreeDPage from "./pages/ThreeDPage"
import SigninScreen from "./pages/SigninScreen"
import MemberList from "./pages/MemberList"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "./actions/adminActions"
import RegisterScreen from "./pages/RegisterScreen"
import "./App.css"
import "./App.sass" // demo of importing sass
import Cookie from "js-cookie"

function Menu() {
  const adminSignin = useSelector((state) => state.adminSignin)
  const { adminInfo } = adminSignin
  console.log(adminInfo)
  let history = useHistory()

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout());
    history.push("/signin");
  }

  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
    >
      <Button onClick={() => history.push("/")}>Form</Button>
      <Button onClick={() => history.push("/3dpage")}>3D Demo</Button>
      {adminInfo ? (
        <Button onClick={handleLogout}>Sign Out</Button>
      ) : (
        <Button onClick={() => history.push("/signin")}>Sign In</Button>
      )}
      <Button onClick={() => history.push("/memberlist")}>Member List</Button>
       
    </ButtonGroup>
  )
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

function App(props) {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Membership entry
        </Typography>
        <Menu />
        <Route path="/" exact={true} component={PageSubmit} />
        <Route path="/success" component={PageSuccess} />
        <Route path="/3dpage" component={ThreeDPage} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/memberlist" component={MemberList} />
      </div>
    </BrowserRouter>
  )
}

export default App
