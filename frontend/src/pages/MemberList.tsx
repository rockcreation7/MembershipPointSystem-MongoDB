import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listforms } from "../actions/formActions"
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemAvatar
} from "@material-ui/core"
import {Edit, Delete} from "@material-ui/icons" 
import { useHistory } from "react-router-dom"

interface member {
  _id: string
  name?: string
  email: string
}

const MemberList: React.FC = () => {
  let history = useHistory()
  const members = useSelector((state: any) => state.formList)
  const { forms, loading, error } = members
  const dispatch = useDispatch() 
  useEffect(() => {
    dispatch(listforms()) 
  })

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <List>
      {forms.map((member: member, index:number) => (
        <ListItem key={member._id}>
          <ListItemAvatar>
            <Avatar alt="" src="" >{index+1}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={member.name} secondary={member.email} />
          <ListItemSecondaryAction>
            <IconButton onClick={
              () => history.push("/memberupdate/"+member._id) 
              }>
              <Edit/>
            </IconButton>
            <IconButton edge="end">
              <Delete/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

export default MemberList
