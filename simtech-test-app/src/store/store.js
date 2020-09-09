import { createStore, combineReducers, applyMiddleware } from 'redux';
import staffListReducer from './reducers/staffListR';
import authReducer from './reducers/authReducer';
import loginReducer from './reducers/loginReducer';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

const reducersPack = combineReducers(
    {
        staffListReducer,
        auth: authReducer,
        loginReducer,
        form: formReducer,
    }
)

let store = createStore(reducersPack, applyMiddleware(thunk));

window.store = store

export default store;