import { staffAPI } from "../api";

let initialState = {
    totalStaffNumber: null,
    department: [],
    memberList: []
};

let staffReducer = (state = initialState, action) => {
  
    switch (action.type) {

        case ('ADD_STAFF_MEMBER'): {
            // console.log(action.data)
            if (true) {
                let newStaffMember = { ...action.data }
                return {
                    ...state,
                    memberList: [...state.memberList, newStaffMember]
                };
            };
            return state;
        }

        case ('SET_STAFF_DATA'): {
            return {
                ...state,
                totalStaffNumber: action.data.totalStaffNumber,
                department: [...state.memberList, ...action.data.department],
                memberList: [...state.memberList, ...action.data.memberList],
            }
        }

        default:
            return state;
    }
}
export default staffReducer;

const setStaffData = (totalStaffNumber, department, memberList) => ({
    type: 'SET_STAFF_DATA',
    data: { totalStaffNumber, department, memberList }
})

export const addMember = (data) => {
    let id = 5;
    id++;
    return { type: 'ADD_STAFF_MEMBER', data: { id: id, ...data } }
};

export const getStaffData = (totalStaffNumber, department, memberList,) => (dispatch) => {
    // Получаем данные с сервера
    let data = staffAPI.staffList()

    let totalStaffNumber = data.totalStaffNumber
    let department = [...data.department]
    let memberList = [...data.memberList]

    // Диспатчим action сетаем state
    dispatch(setStaffData(totalStaffNumber, department, memberList,))
}