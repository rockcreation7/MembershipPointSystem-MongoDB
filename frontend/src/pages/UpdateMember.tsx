import React from "react"
import { create, update } from "../actions/formActions"
import MemberForm from '../components/memberForm'

function MemberSubmit() {
  return (<MemberForm submitAction={create}/>)
}

export default MemberSubmit
