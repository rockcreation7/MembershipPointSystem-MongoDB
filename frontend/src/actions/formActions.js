import axios from "axios"

import {
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL,
} from "../constants/formConstants"

const formSubmit = (data) => async (dispatch) => {
  try {  
    console.log(data)
    dispatch({ type: FORM_SUBMIT, payload: data })
    const { newformData } = await axios.post("http://localhost:4000/api/form", data)
    dispatch({
      type: FORM_SUBMIT_SUCCESS,
      payload: newformData,
      success: true,
    })
  } catch (error) {
    dispatch({ type: FORM_SUBMIT_FAIL, payload: error })
  }
}

export { formSubmit }
