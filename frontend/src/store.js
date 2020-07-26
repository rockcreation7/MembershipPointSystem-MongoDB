import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { formReducer } from './reducers/formReducers';

const userInfo = null;

const initialState = {
  formData: {userInfo}
};


const reducer = combineReducers({
  formData: formReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );

export default store;