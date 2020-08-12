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
} from "../constants/memberConstants"

interface memberListAction{
  type:string,
  payload:{}
}

function memberListReducer(state = { members: [] }, action: memberListAction) {
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

interface memberAction{
  type:string,
  payload:{}
}

function memberReducer(state = {}, action: memberAction) {
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

interface memberUpdateAction{
  type:string,
  payload:{}
}

function memberUpdateReducer(state = {}, action: memberUpdateAction) {
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
