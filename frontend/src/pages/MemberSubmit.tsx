import React from "react" 
import MemberForm from "../components/memberForm"
import { useSelector } from "react-redux"
import { 
  useParams
} from "react-router-dom";

function CreateMember() {
  return <MemberForm />
}

function UpdateMember() { 
  let ParamsData:any = useParams()
  const {forms} = useSelector((state:any) => state.formList)
  let data = forms.find((form: { _id: string })=>form._id === ParamsData.id)
  return <MemberForm data={data} update/>
}

export { CreateMember, UpdateMember }
