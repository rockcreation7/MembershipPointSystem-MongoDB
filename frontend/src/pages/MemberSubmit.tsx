import React from "react"
import { createMember, updateMember } from "../actions/formActions"
import MemberForm from '../components/memberForm'

function CreateMember() {
  return (<MemberForm submitAction={createMember}/>)
}

function UpdateMember(){
  return (<MemberForm submitAction={updateMember}/>)
}

export {CreateMember, UpdateMember}
