let employes = {
    auth: {
        userLogin: null,
        userPassword: null,
        isAuth: null,
        isAdmin: false,
    },
    department: {
        marketing: "marketing",
        devTeam: "devTeam",
        HRDepartment: "HRDepartment"
    },
    totalStaffNumber: 5,
    memberList: {
        admin: {
            userID: 0, login: 'admin', password: 'admin', userPhoto: null, userName: 'Егор', userLastname: 'Ливанов',
            userDepartment: 'admin', userEmail: 'someEmail@ya.ru', userPhoneNumber: '89001002030', isAdmin: true
        },
        staff: [
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
    }
}

