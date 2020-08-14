import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import {
  Container,
  Typography,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  ThemeProvider,
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
// import "./App.css"
// import "./App.sass"
// demo of importing sass, uncomment for working demo
import { MoveToInbox as InboxIcon, Mail as MailIcon } from "@material-ui/icons"
import { createMuiTheme } from "@material-ui/core/styles"
import { deepPurple } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: deepPurple[500],
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
})

const drawerWidth = 240
// use css in js
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
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
      <ThemeProvider theme={theme}>
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
          <Container
            style={{ minHeight: "100vh" }}
            fixed
            className={classes.content}
          >
            <Toolbar />
            <Route path="/" exact={true} component={CreateMember} />
            <Route path="/memberupdate/:id" component={UpdateMember} />
            <Route path="/memberlist" component={MemberList} />
            <Route path="/success" component={MemberCreateSuccess} />
            <Route path="/updatesuccess" component={MemberUpdateSuccess} />
            <Route path="/3dpage" component={ThreeDPage} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
          </Container>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
