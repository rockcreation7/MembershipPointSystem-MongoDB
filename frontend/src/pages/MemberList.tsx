import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { listMembers } from "../actions/memberActions"
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemAvatar,
} from "@material-ui/core"
import { Edit, Delete, EventAvailable } from "@material-ui/icons"
import { useHistory } from "react-router-dom"
import { useTypedSelector } from "../store"
import { deleteMember } from "../actions/memberActions"

interface member {
  _id: string
  name: string
  email: string
  point: string
}

const MemberList: React.FC = () => {
  let history = useHistory()
  const memberList = useTypedSelector((state) => state.memberList)
  const memberDelete = useTypedSelector((state) => state.memberDelete)
  const { members, loading, error } = memberList
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listMembers())
  }, [dispatch, memberDelete])
  const handleDelete = (id: string) => {
    dispatch(deleteMember(id))
  }

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <List>
      {members.map((member: member, index: number) => (
        <ListItem key={member._id}>
          <ListItemText
            primary={member.name + " " + member.email}
            secondary={  "Available Point : " +(member.point ? member.point : "0") }
          />
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => history.push("/memberupdate/" + member._id)}
            >
              <Edit />
            </IconButton>
            <IconButton onClick={() => handleDelete(member._id)} edge="end">
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

export default MemberList
