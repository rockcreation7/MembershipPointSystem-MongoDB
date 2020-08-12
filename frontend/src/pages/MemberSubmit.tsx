import React from "react" 
import MemberForm from "../components/memberForm"
import {useTypedSelector} from "../store"
import { 
  useParams
} from "react-router-dom";

function CreateMember() {
  return <MemberForm />
}

function UpdateMember() { 
  let ParamsData:any = useParams()
  const {members} = useTypedSelector((state) => state.memberList)
  let data = members.find((form: { _id: string })=>form._id === ParamsData.id)
  return <MemberForm data={data} update/>
}

export { CreateMember, UpdateMember }
