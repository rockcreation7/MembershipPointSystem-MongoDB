import {
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNIN_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAIL,
  ADMIN_LOGOUT
} from "../constants/adminConstants"

interface adminSigninAction{
  type:string,
  payload:{}
}

function adminSigninReducer(state = {}, action:adminSigninAction) {
  switch (action.type) {
    case ADMIN_SIGNIN_REQUEST:
      return { loading: true }
    case ADMIN_SIGNIN_SUCCESS:
      return { loading: false, adminInfo: action.payload }
    case ADMIN_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case ADMIN_LOGOUT:
      return {}
    default:
      return state
  }
}

interface adminRegisterAction{
  type:string,
  payload:{}
}

function adminRegisterReducer(state = {}, action:adminRegisterAction) {
  switch (action.type) {
    case ADMIN_REGISTER_REQUEST:
      return { loading: true }
    case ADMIN_REGISTER_SUCCESS:
      return { loading: false, adminInfo: action.payload }
    case ADMIN_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export { adminSigninReducer, adminRegisterReducer }
