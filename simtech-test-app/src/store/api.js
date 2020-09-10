export const authAPI = {
    me() {
        // GET Запрос: проверка наличия сессии
        return true
    },
    login(login, password) {
        // POST Запрос: Создать авторизованную сессию   
        let isAdmin;
        let userID;
        let userPhoto
        let userName
        let userLastname
        let userDepartment
        let userEmail
        let userPhoneNumber
        // Имитация работы сервера
        let data = staffAPI.staffList()
        data.memberList.map((i) => {
            if (i.login === login && i.password === password) {

                userPhoto = i.userPhoto
                userName = i.userName
                userLastname = i.userLastname
                userDepartment = i.userDepartment
                userEmail = i.userEmail
                userPhoneNumber = i.userPhoneNumber
                userID = i.userID

                if (login === 'admin' && password === 'admin') {
                    isAdmin = true
                } else {
                    isAdmin = false
                }
            }
        })


        return { isAuth: true, isAdmin, userID }
    },
    logout() {
        // DELETE Запрос: Завершить сессию   
        return true
    }
}

export const staffAPI = {
    staffList() {
        // GET Запрос: получить массив отделов\персонала
        return {
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
        }
    }
}