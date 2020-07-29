import {
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL,
} from "../constants/formConstants"

function formReducer(state = { formData: {} }, action) {
  switch (action.type) {
    case FORM_SUBMIT:
      return { loading: true }
    case FORM_SUBMIT_SUCCESS:
      return { loading: false, formData: action.payload }
    case FORM_SUBMIT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export { formReducer }
