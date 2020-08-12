import React from "react"
import MemberForm from "../components/memberForm"
import { useTypedSelector } from "../store"
import { useParams } from "react-router-dom"

function CreateMember() {
  const memberData = useTypedSelector((state) => state.memberData)
  let { loading, error } = memberData
  return <MemberForm loading={loading} error={error} />
}

function UpdateMember() {
  const memberUpdate = useTypedSelector((state) => state.memberUpdate)
  let { loading, error } = memberUpdate
  let ParamsData: any = useParams()
  const { members } = useTypedSelector((state) => state.memberList)
  let data = members.find((form: { _id: string }) => form._id === ParamsData.id)
  return <MemberForm data={data} update loading={loading} error={error} />
}

export { CreateMember, UpdateMember }
