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
    adminInfo: { name: string }
  }
}

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
        {
          link: "/",
          text: "Create Member",
          icon: <AddIcon />,
          disabled: false,
        },
        {
          link: "/memberlist",
          text: "Member List",
          icon: <ListIcon />,
          disabled: false,
        }/* ,
        {
          link: "/chargemember",
          text: "Add Member Point",
          icon: <AddIcon />,
          disabled: true,
        },
        {
          link: "/memberlog",
          text: "Member Log",
          icon: <ListIcon />,
          disabled: true,
        },
        {
          link: "/3dpage",
          text: "3D Demo",
          icon: <MailIcon />,
          disabled: true,
        },
        {
          link: "/admincreate",
          text: "Create Admin",
          icon: <AddIcon />,
          disabled: true,
        }, */
      ].map((meunItem, index) => (
        <ListItem
          disabled={meunItem.disabled}
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

export default Menu
