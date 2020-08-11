import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../actions/adminActions"
import { useHistory } from "react-router-dom"
import { ButtonGroup, Button } from "@material-ui/core"

interface adminRootState {
  adminSignin: {
    adminInfo: object
  }
}

function Menu() {
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
}

export default Menu
