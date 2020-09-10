import { authAPI } from '../api'

let initialState = {
    id: null,
    login: null,
    password: null,
    userPhoto: null,
    userName: null,
    userLastname: null,
    userDepartment: null,
    userEmail: null,
    userPhoneNumber: null,
    isAdmin: null,
    isAuth: false,
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('LOG_IN'): {
            console.log(action.payload);
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}

export const SET_USER_DATA = (payload) => ({ type: 'LOG_IN', payload, })

export const getUserData = (data) => (dispatch) => {
    // debugger
    let loggedIn = authAPI.me()
    if (loggedIn === true) {
        console.log('server response: logged In');
        dispatch(SET_USER_DATA({ ...data }))
    }
}

export const login = (login, password) => (dispatch) => {
    debugger
    let loggedIn = authAPI.login(login, password)

    if (loggedIn.isAuth === true) {

        console.log('server response: login successfull');

        if (loggedIn.isAdmin) {
            dispatch(getUserData({ ...loggedIn }))
        } else {
            dispatch(getUserData({ ...loggedIn }))
        }
    }
}

export const logout = () => (dispatch) => {
    // debugger
    authAPI.logout()
    dispatch(SET_USER_DATA(null, null, null, false))
}

export default authReducer; 