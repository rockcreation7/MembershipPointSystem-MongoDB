import Cookie from "js-cookie"
import { useSelector, TypedUseSelectorHook } from "react-redux"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import {
  adminSigninReducer,
  adminRegisterReducer,
} from "./reducers/adminReducers"
import {
  memberReducer,
  memberUpdateReducer,
  memberListReducer,
  memberDeleteReducer
} from "./reducers/memberReducers"

const adminInfo = Cookie.getJSON("adminInfo") || null

const initialState = {
  adminSignin: { adminInfo },
}

const reducer = combineReducers({
  memberList: memberListReducer,
  memberUpdate: memberUpdateReducer,
  memberData: memberReducer,
  adminSignin: adminSigninReducer,
  adminRegister: adminRegisterReducer,
  memberDelete:memberDeleteReducer
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export type RootState = {
  memberData: { data: {}; success: boolean; loading: boolean; error: any }
  memberList: { members: []; success: boolean; loading: boolean; error: any }
  memberUpdate: { data: {}; success: boolean; loading: boolean; error: any }
  memberDelete: { data: {}; success: boolean; loading: boolean; error: any }
  adminSignin: {
    adminInfo: { token: string }
    loading: boolean
    error: boolean
  }
  adminRegister: { adminInfo: {}; loading: boolean; error: boolean }
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export { store, useTypedSelector }
