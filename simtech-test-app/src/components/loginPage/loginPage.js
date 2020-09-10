import React from 'react';
import LoginReduxForm from './loginForm';

const LoginPage = (props) => {

    let onSubmit = (formData) => {
        props.onSubmit(formData)
    }

    return < div >
        <LoginReduxForm onSubmit={onSubmit} />
    </div >
}

export default LoginPage