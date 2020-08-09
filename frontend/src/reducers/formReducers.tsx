import {
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL,
  FORM_LIST_REQUEST,
  FORM_LIST_SUCCESS,
  FORM_LIST_FAIL
} from "../constants/formConstants"


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

export { formReducer, formListReducer }
