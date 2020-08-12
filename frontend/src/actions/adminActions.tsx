import Axios from "axios"
import Cookie from "js-cookie"
import {
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNIN_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAIL,
  ADMIN_LOGOUT,
} from "../constants/adminConstants"
import config from "../config"
import { Dispatch } from "redux"

const apiURL = config.API_URL

const signinAdmin = (email:string, password:string) => async (dispatch: Dispatch) => {
  dispatch({ type: ADMIN_SIGNIN_REQUEST, payload: { email, password } })
  try { 
    const { data } = await Axios.post(apiURL + "/admin/signin", {
      email,
      password,
    })
    dispatch({ type: ADMIN_SIGNIN_SUCCESS, payload: data })
    Cookie.set("adminInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({ type: ADMIN_SIGNIN_FAIL, payload: error.message })
  }
}

const registerAdmin = (name:string, email:string, password:string) => async (dispatch: Dispatch) => {
  dispatch({ type: ADMIN_REGISTER_REQUEST, payload: { name, email, password } })
  try {
    const { data } = await Axios.post(apiURL + "/admin/register", {
      name,
      email,
      password,
    })
    dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data })
    Cookie.set("adminInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({ type: ADMIN_REGISTER_FAIL, payload: error.message })
  }
}

const logout = () => (dispatch:Dispatch) => {
  Cookie.remove("adminInfo")
  dispatch({ type: ADMIN_LOGOUT })
}

export { signinAdmin, registerAdmin, logout }
