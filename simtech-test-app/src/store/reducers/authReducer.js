import { authAPI } from '../../api/api'

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

    let loggedIn = authAPI.me()
    // При подтвержденной сессии устанавливаем "личность" пользователя

    if (loggedIn === true) {
        console.log('server response: logged In');

        // сетаем данные пользователя в state, для подтверждения его личности далее
        dispatch(SET_USER_DATA({ ...data }))
    }
}

export const login = (login, password) => (dispatch) => {
    // Имитируем запрос к серверу
    let loggedIn = authAPI.login(login, password)

    // При совпадении данных мы устанавливаем сессию
    if (loggedIn.isAuth === true) {
        console.log('server response: login successfull');
        dispatch(getUserData({ ...loggedIn }))
    }
}

export const logout = () => (dispatch) => {
    authAPI.logout()
    dispatch(SET_USER_DATA(null, null, null, false))
}

export default authReducer; 