import Cookie from "js-cookie"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import {
  adminSigninReducer,
  adminRegisterReducer,
} from "./reducers/adminReducers"
import { formReducer, formListReducer } from "./reducers/formReducers"
const adminInfo = Cookie.getJSON("adminInfo") || null

const initialState = {
  adminSignin: { adminInfo }
}

const reducer = combineReducers({
  formList: formListReducer,
  formData: formReducer,
  adminSignin: adminSigninReducer,
  adminRegister: adminRegisterReducer,
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
