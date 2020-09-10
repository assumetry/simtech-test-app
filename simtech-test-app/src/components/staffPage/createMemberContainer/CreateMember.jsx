import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './form.module.css';

let CreateMember = (props) => {

    const onSubmit = (formData) => {
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
        <form className={style.form} onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component="input" type="text" placeholder='Логин' />
            </div>
            <div>
                <Field name="password" component="input" type="text" placeholder='Пароль' />
            </div>
            <div>
                <Field name="userPhoto" component="input" type="text" value='null' />
            </div>
            <div>
                <Field name="userName" component="input" type="text" placeholder='userName' />
            </div>
            <div>
                <Field name="userLastname" component="input" type="text" placeholder='userLastname' />
            </div>
            <div>
                <Field name="userDepartment" component="select" placeholder='Отдел'>
                    <option></option>
                    <option value="devTeam">DevTeam</option>
                    <option value="HRDepartment">HRDepartment</option>
                    <option value="marketing">Marketing</option>
                </Field>
            </div>
            <div>
                <Field name="userEmail" component="input" type="email" placeholder='Email' />
            </div>
            <div>
                <Field name="userPhoneNumber" component="input" type="tel" placeholder='Телефон' />
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

