import {
    FORM_SUBMIT,
} from "../constants/formConstants";

const formSubmit = (data) => (dispatch) => {
    dispatch({ type: FORM_SUBMIT, payload: data });
}

export { formSubmit }