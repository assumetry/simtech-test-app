import React from 'react';
import style from './LoginContainer.module.css'
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {

    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <div>
                <span>Login </span>
                <Field name="login" component="input" type="text" placeholder='Логин'/>
            </div>
            <div>
                <span>Password </span>
                <Field name="password" component="input" type="text" placeholder='Пароль' />
            </div>
            <div>
                <button type="submit">Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm