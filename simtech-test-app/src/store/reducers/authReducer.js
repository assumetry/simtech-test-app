import { authAPI } from '../api'
let initialState = {
    id: null,
    login: null,
    password: null,
    isAuth: false,
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('LOG_IN'): {
            debugger;
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}

export const SET_USER_DATA = (id, login, password, isAuth) => ({
    type: 'LOG_IN',
    payload: { id, login, password, isAuth, }
})

export const getUserData = (id, login, password) => (dispatch) => {
    debugger
    let loggedIn = authAPI.me()
    if (loggedIn === true) {
        console.log('server response: logged In');
        dispatch(SET_USER_DATA(id, login, password, true))
    }
}

export const login = (login, password) => (dispatch) => {
    debugger
    let loggedIn = authAPI.login(login, password)
    if (loggedIn === true) {
        console.log('server response: login successfull');
        dispatch(getUserData(null, login, password))
    }
}
export const logout = () => (dispatch) => {
    debugger
    authAPI.logout()
    dispatch(SET_USER_DATA(null, null, null, false))
}

export default authReducer; 