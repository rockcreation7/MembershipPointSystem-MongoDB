import axios from "axios"

import {
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL,
} from "../constants/formConstants"

const formSubmit = (data) => (dispatch) => {
 
    dispatch({ type: FORM_SUBMIT })

    axios.post("http://localhost:4000/api/form", data)
    .then(response => {
      if (response.data.length > 0) {
        dispatch({
          type: FORM_SUBMIT_SUCCESS,
          payload: response
        })
      }
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
      // beware console will hide msg, cant log, use error.response to diplay
      dispatch({ type: FORM_SUBMIT_FAIL, payload: error.response })
    })
}

export { formSubmit }
