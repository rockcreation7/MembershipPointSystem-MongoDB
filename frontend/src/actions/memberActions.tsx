import axios from "axios"
import {
  MEMBER_SUBMIT,
  MEMBER_SUBMIT_SUCCESS,
  MEMBER_SUBMIT_FAIL,
  MEMBER_LIST_REQUEST,
  MEMBER_LIST_SUCCESS,
  MEMBER_LIST_FAIL,
  MEMBER_UPDATE,
  MEMBER_UPDATE_SUCCESS,
  MEMBER_UPDATE_FAIL,
  MEMBER_DELETE_REQUEST,
  MEMBER_DELETE_SUCCESS,
  MEMBER_DELETE_FAIL,
} from "../constants/memberConstants"
import { Dispatch } from "redux"
import config from "../config"
import { RootState } from "../store"
const apiURL = config.API_URL

const listMembers = () => async (dispatch: Dispatch) => {
  dispatch({ type: MEMBER_LIST_REQUEST })
  try {
    const { data } = await axios.get(apiURL + "/form/list")
    dispatch({ type: MEMBER_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: MEMBER_LIST_FAIL, payload: error.message })
  }
}

const createMember = (data: {}, callback: () => void) => async (
  dispatch: Dispatch
) => {
  dispatch({ type: MEMBER_SUBMIT })
  await axios
    .post(apiURL + "/form/", data)
    .then((response) => {
      dispatch({
        type: MEMBER_SUBMIT_SUCCESS,
        payload: response,
      })
      callback()
    })
    .catch((error) => {
      // beware axios console will hide msg, cant log, use error.response to diplay
      dispatch({ type: MEMBER_SUBMIT_FAIL, payload: error.response })
    })
}

const updateMember = (
  data: {},
  id: string,
  callback: () => void,
  failcallback: any
) => async (dispatch: Dispatch, getState: () => RootState) => {
  const {
    adminSignin: { adminInfo },
  } = getState()
  if (!adminInfo) {
    dispatch({
      type: MEMBER_UPDATE_FAIL,
      payload: "Sign In Required",
    })
    failcallback("Sign In Required")
    return
  }
  dispatch({ type: MEMBER_UPDATE })
  await axios
    .put(apiURL + "/form/" + id, data, {
      headers: {
        Authorization: adminInfo && adminInfo.token,
      },
    })
    .then((response) => {
      dispatch({
        type: MEMBER_UPDATE_SUCCESS,
        payload: response,
      })
      callback()
    })
    .catch((error) => {
      // beware axios console will hide msg, cant log, use error.response to diplay
      dispatch({
        type: MEMBER_UPDATE_FAIL,
        payload: error.response,
      })
      failcallback("error")
    })
}

const deleteMember = (memberId: string) => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  try {
    dispatch({ type: MEMBER_DELETE_REQUEST, payload: memberId })
    const {
      adminSignin: { adminInfo },
    } = getState()
    const { data } = await axios.delete(apiURL + "/form/" + memberId, {
      headers: {
        Authorization: adminInfo && adminInfo.token,
      },
    })
    dispatch({ type: MEMBER_DELETE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: MEMBER_DELETE_FAIL, payload: error.response })
  }
}

export { createMember, updateMember, listMembers, deleteMember }
