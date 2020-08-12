import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../actions/adminActions"
import { useHistory } from "react-router-dom"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core"
import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  Add as AddIcon,
  List as ListIcon,
  AccountCircle as AccountCircleIcon,
} from "@material-ui/icons"

interface adminRootState {
  adminSignin: {
    adminInfo: {name:string}
  }
}

/* function Menu() {
  const adminSignin = useSelector(
    (state: adminRootState) => state.adminSignin
  )
  const { adminInfo } = adminSignin
  let history = useHistory()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    history.push("/signin")
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
} */

function Menu() {
  const adminSignin = useSelector((state: adminRootState) => state.adminSignin)
  const { adminInfo } = adminSignin
  let history = useHistory()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    history.push("/signin")
  }

  return (
    <List>
      {[
        { link: "/", text: "Create Member", icon: <AddIcon /> },
        { link: "/memberlist", text: "Member List", icon: <ListIcon /> },
        { link: "/3dpage", text: "3D Demo", icon: <MailIcon /> },
        { link: "/admincreate", text: "Create Admin", icon: <AddIcon /> },
      ].map((meunItem, index) => (
        <ListItem
          button
          key={meunItem.text}
          onClick={() => history.push(meunItem.link)}
        >
          <ListItemIcon>{meunItem.icon}</ListItemIcon>
          <ListItemText primary={meunItem.text} />
        </ListItem>
      ))}

      <ListItem
        button
        key={"SignInOut"}
        onClick={adminInfo ? handleLogout : () => history.push("/signin")}
      >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText
          primary={adminInfo ? "Sign Out : " + adminInfo.name : "Sign In"}
        />
      </ListItem>

      <Divider />
    </List>
  )
}

/* <ButtonGroup
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
</ButtonGroup> */

export default Menu
