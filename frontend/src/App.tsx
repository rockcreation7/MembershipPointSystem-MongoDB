import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import {
  Typography,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { CreateMember, UpdateMember } from "./pages/MemberSubmit"
import MemberCreateSuccess from "./pages/MemberCreateSuccess"
import MemberUpdateSuccess from "./pages/MemberUpdateSuccess"
import ThreeDPage from "./pages/ThreeDPage"
import SigninScreen from "./pages/SigninScreen"
import MemberList from "./pages/MemberList"
import RegisterScreen from "./pages/RegisterScreen"
import Menu from "./components/menu"
import "./App.css"
import "./App.sass" // demo of importing sass
import { MoveToInbox as InboxIcon, Mail as MailIcon } from "@material-ui/icons"

const drawerWidth = 240
// use css in js
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiButtonGroup-root": {
      /* margin: "10px 0 20px 0", */
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      /* width: "25ch", */
    },
    "& button[type='submit'].MuiButton-containedPrimary": {
      marginTop: "12px",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function App() {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Membership system
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <Menu />
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Route path="/" exact={true} component={CreateMember} />
          <Route path="/memberupdate/:id" component={UpdateMember} />
          <Route path="/memberlist" component={MemberList} />
          <Route path="/success" component={MemberCreateSuccess} />
          <Route path="/updatesuccess" component={MemberUpdateSuccess} />
          <Route path="/3dpage" component={ThreeDPage} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
