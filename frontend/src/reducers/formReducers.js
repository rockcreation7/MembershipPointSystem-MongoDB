const { FORM_SUBMIT } = require("../constants/formConstants");

function formReducer(state = { formData: {} }, action) {
    switch (action.type) {
        case FORM_SUBMIT:
            return { ...state, formData: action.payload }
        default:
            return state
    } 
   
}

export { formReducer }