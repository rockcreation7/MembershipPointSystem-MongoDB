import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import {
  Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PageSubmit from "./pages/PageSubmit"
import PageSuccess from "./pages/PageSuccess"
import "./App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    margin: "0 auto",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "24px",
    borderRadius: "4px",
    marginTop: "24px",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiButton-containedPrimary": {
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
        </Typography>{" "}
        <Route path="/" exact={true} component={PageSubmit} />
        <Route path="/success" component={PageSuccess} />
      </div>
    </BrowserRouter>
  )
}

export default App
