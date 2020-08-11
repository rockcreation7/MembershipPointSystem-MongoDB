import {
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL,
  FORM_LIST_REQUEST,
  FORM_LIST_SUCCESS,
  FORM_LIST_FAIL,
  MEMBER_UPDATE,
  MEMBER_UPDATE_FAIL,
  MEMBER_UPDATE_SUCCESS
} from "../constants/formConstants"
import { useSelector, TypedUseSelectorHook } from 'react-redux'

function formListReducer(state = { forms: [] }, action:any) {
  switch (action.type) {
    case FORM_LIST_REQUEST:
      return { loading: true };
    case FORM_LIST_SUCCESS:
      return { loading: false, forms: action.payload };
    case FORM_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

function formReducer(state = {}, action:any) {
  switch (action.type) {
    case FORM_SUBMIT:
      return { loading: true }
    case FORM_SUBMIT_SUCCESS: 
      return { loading: false, success: true, data: action.payload }
    case FORM_SUBMIT_FAIL: 
      return { loading: false, success: false, error: action.payload }
    default:
      return state
  }
}


function memberUpdateReducer(state = {}, action:any) {
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

interface RootState {
  formData: {data:{}, success:boolean, loading:boolean, error:any}
  formList: {forms:[], success:boolean, loading:boolean, error:any}
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export { formReducer, memberUpdateReducer, formListReducer, useTypedSelector }
