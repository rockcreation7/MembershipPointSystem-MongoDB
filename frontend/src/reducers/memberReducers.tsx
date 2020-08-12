import {
  MEMBER_SUBMIT,
  MEMBER_SUBMIT_SUCCESS,
  MEMBER_SUBMIT_FAIL,
  MEMBER_LIST_REQUEST,
  MEMBER_LIST_SUCCESS,
  MEMBER_LIST_FAIL,
  MEMBER_UPDATE,
  MEMBER_UPDATE_FAIL,
  MEMBER_UPDATE_SUCCESS,
} from "../constants/formConstants"

function memberListReducer(state = { members: [] }, action: any) {
  switch (action.type) {
    case MEMBER_LIST_REQUEST:
      return { loading: true }
    case MEMBER_LIST_SUCCESS:
      return { loading: false, members: action.payload }
    case MEMBER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

function memberReducer(state = {}, action: any) {
  switch (action.type) {
    case MEMBER_SUBMIT:
      return { loading: true }
    case MEMBER_SUBMIT_SUCCESS:
      return { loading: false, success: true, data: action.payload }
    case MEMBER_SUBMIT_FAIL:
      return { loading: false, success: false, error: action.payload }
    default:
      return state
  }
}

function memberUpdateReducer(state = {}, action: any) {
  switch (action.type) {
    case MEMBER_UPDATE:
      return { loading: true }
    case MEMBER_UPDATE_SUCCESS:
      return { loading: false, success: true, data: action.payload }
    case MEMBER_UPDATE_FAIL:
      return { loading: false, success: false, error: action.payload }
    default:
      return state
  }
}

export {
  memberReducer,
  memberUpdateReducer,
  memberListReducer
}
