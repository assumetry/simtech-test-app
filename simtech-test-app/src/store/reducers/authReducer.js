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

export const SET_USER_DATA = (id, login, password, isAdmin, isAuth) => ({
    type: 'LOG_IN',
    payload: { id, login, password, isAdmin, isAuth, }
})

export const getUserData = (id, login, password, isAdmin) => (dispatch) => {
    // debugger
    let loggedIn = authAPI.me()
    if (loggedIn === true) {
        console.log('server response: logged In');
        dispatch(SET_USER_DATA(id, login, password, isAdmin, true))
    }
}

export const login = (login, password) => (dispatch) => {
    debugger
    let loggedIn = authAPI.login(login, password)

    if (loggedIn.isAuth === true) {

        console.log('server response: login successfull');

        if (loggedIn.isAdmin) {
            dispatch(getUserData(loggedIn.userID, login, password, true))
        } else {
            dispatch(getUserData(
                loggedIn.userID,
                loggedIn.login,
                loggedIn.password,
                loggedIn.userPhoto,
                loggedIn.userName,
                loggedIn.userLastname,
                loggedIn.userDepartment,
                loggedIn.userEmail,
                loggedIn.userPhoneNumber,
                false,
                ))
        }
    }
}

export const logout = () => (dispatch) => {
    // debugger
    authAPI.logout()
    dispatch(SET_USER_DATA(null, null, null, false))
}

export default authReducer; 