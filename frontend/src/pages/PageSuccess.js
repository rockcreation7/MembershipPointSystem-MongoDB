import React, { useEffect } from "react"
import { useSelector } from "react-redux"

function PageSuccess(props) {
  const formData = useSelector((state) => state.formData)
  const { success } = formData
  useEffect(() => {
    if (!success) {
      props.history.push("/")
    }
  }, [success])
  return <div>Success</div>
}

export default PageSuccess
