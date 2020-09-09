let initialState = {
    totalStaffNumber: 0,
    department: [
        "marketing",
        "devTeam",
        "HRDepartment"
    ],
    memberList: [
        {
            userID: 0, login: 'admin', password: 'admin', userPhoto: null, userName: 'Егор', userLastname: 'Ливанов',
            userDepartment: 'admin', userEmail: 'someEmail@ya.ru', userPhoneNumber: '89001002030', isAdmin: true
        },
        {
            userID: 1, login: 'Danil', password: 'encoded1', userPhoto: null, userName: 'Данил', userLastname: 'Муренцев',
            userDepartment: 'devTeam', userEmail: 'someEmail@ya.ru', userPhoneNumber: '89001002030', isAdmin: false,
        },
        {
            userID: 2, login: 'Peter', password: 'encoded2', userPhoto: null, userName: 'Петр', userLastname: 'Вранов',
            userDepartment: 'devTeam', userEmail: 'someEmail1@ya.ru', userPhoneNumber: '89001002030', isAdmin: false,
        },
        {
            userID: 3, login: 'Sveta', password: 'encoded3', userPhoto: null, userName: 'Света', userLastname: 'Волкова',
            userDepartment: 'HRDepartment', userEmail: 'someEmail2@ya.ru', userPhoneNumber: '89001002030', isAdmin: false,
        },
        {
            userID: 4, login: 'Irina', password: 'encoded4', userPhoto: null, userName: 'Ирина', userLastname: 'Тихонова',
            userDepartment: 'HRDepartment', userEmail: 'someEmail3@ya.ru', userPhoneNumber: '89001002030', isAdmin: false,
        },
        {
            userID: 5, login: 'Oleg', password: 'encoded5', userPhoto: null, userName: 'Олег', userLastname: 'Великий',
            userDepartment: 'marketing', userEmail: 'someEmail4@ya.ru', userPhoneNumber: '89001002030', isAdmin: false,
        },
    ]
};

let staffListReducer = (state = initialState, action) => {
    // console.log(state)

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

        default:
            return state;
    }
}


export const addMember = (data) => {
    let id = 5;
    id++;
    return { type: 'ADD_STAFF_MEMBER', data: { id: id, ...data } }
};

export default staffListReducer;