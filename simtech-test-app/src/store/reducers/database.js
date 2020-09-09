let initialState = {
    totalStaffNumber: null,
    department: {
        firstDepartment: 'firstDepartment',
        secondDepartment: 'secondDepartment',
        thirdDepartment: 'thirdDepartment',
    },
    staffList: [],
};

let UserProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('ADD_STAFF_MEMBER'): {
            if (action.isAdmin === true) {
                let newStaffMember = {}
                return {
                    ...state.staffList.push(newStaffMember)
                };
            };
            return state;
        }

        default:
            return state;
    }
}

export const ADD_STAFF_MEMBER_AC = (data) => ({ type: 'ADD_STAFF_MEMBER', data });

export default UserProfileReducer;