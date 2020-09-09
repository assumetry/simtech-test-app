import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CreateMember = (props) => {

    // console.log(props) 
    // debugger

    const onSubmit = (formData) => {
        // debugger
        props.addMember(formData)
    }

    return (
        <div>
            <CreateMemberReduxFrom onSubmit={onSubmit} />
        </div>
    )
}

let CreateMemberFrom = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component="input" type="text" placeholder='Логин' />
            </div>
            <div>
                <Field name="password" component="input" type="text" placeholder='Пароль' />
            </div>
            <div>
                <Field name="userPhoto" component="input" type="text" placeholder='userPhoto' />
            </div>
            <div>
                <Field name="userName" component="input" type="text" placeholder='userName' />
            </div>
            <div>
                <Field name="userLastname" component="input" type="text" placeholder='userLastname' />
            </div>
            <div>
                <Field name='userDepartment' component="input" type="select-multiple" placeholder='Отдел' />
            </div>
            <div>
                <Field name="userEmail" component="input" type="email" placeholder='Email' />
            </div>
            <div>
                <Field name="userPhoneNumber" component="input" type="text" placeholder='Телефон' />
            </div>
            <div>
                <button>Добавить сотрудника</button>
            </div>
        </form>
    )
}
const CreateMemberReduxFrom = reduxForm({
    form: 'CreateMemberFrom'
})(CreateMemberFrom)

export default CreateMember

