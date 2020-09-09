let initialState = {
    inputValue: '',
};

let loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('TEST'): {
            console.log(state)
            return state 
        }
        case ('INPUT_VALUE_UPDATE'): {
            console.log(state)
            return {
                ...state,
                inputValue: action.text
            }

        }
        default:
            return state
    }
}

export const INPUT_VALUE_UPDATE_AC = (text) => ({ type: 'INPUT_VALUE_UPDATE', text })
export const SET_ADMIN_DATA_AC = () => ({ type: 'TEST' })

export default loginReducer;