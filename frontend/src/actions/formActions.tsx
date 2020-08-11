import axios from "axios"
import {
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL,
  FORM_LIST_REQUEST,
  FORM_LIST_SUCCESS,
  FORM_LIST_FAIL,
  MEMBER_UPDATE,
  MEMBER_UPDATE_SUCCESS,
  MEMBER_UPDATE_FAIL,
} from "../constants/formConstants"
import { Dispatch } from "redux"
import config from "../config.js"
const apiURL = config.API_URL

const listforms = () => async (dispatch: Dispatch) => { 
  dispatch({ type: FORM_LIST_REQUEST })
  try {
    const { data } = await axios.get(apiURL + "/form/list")
    dispatch({ type: FORM_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FORM_LIST_FAIL, payload: error.message })
  }
}

const createMember = (data: any, callback: any) => async (
  dispatch: Dispatch
) => {
  dispatch({ type: FORM_SUBMIT })
  await axios
    .post(apiURL + "/form/", data)
    .then((response) => {
      dispatch({
        type: FORM_SUBMIT_SUCCESS,
        payload: response,
      })
      callback()
    })
    .catch((error) => {
      // beware axios console will hide msg, cant log, use error.response to diplay
      dispatch({ type: FORM_SUBMIT_FAIL, payload: error.response })
    })
}

const updateMember = (data: object, id:string, callback: any) => async (
  dispatch: Dispatch
) => {
  dispatch({ type: MEMBER_UPDATE })
  console.log({ action: MEMBER_UPDATE })
  await axios
    .put(apiURL + "/form/" + id, data)
    .then((response) => {
      dispatch({
        type: MEMBER_UPDATE_SUCCESS,
        payload: response,
      })
      callback()
    })
    .catch((error) => {
      // beware axios console will hide msg, cant log, use error.response to diplay
      dispatch({ type: MEMBER_UPDATE_FAIL, payload: error.response })
    })
}

export { createMember, updateMember, listforms }
