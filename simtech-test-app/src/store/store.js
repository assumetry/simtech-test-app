import { createStore, combineReducers, applyMiddleware } from 'redux';
import staffReducer from './reducers/staffReducer';
import authReducer from './reducers/authReducer';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

const reducersPack = combineReducers(
    {
        staffReducer,
        auth: authReducer,
        form: formReducer,
    }
)

let store = createStore(reducersPack, applyMiddleware(thunk));

export default store;