import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import LoginReduxForm from './loginForm';
import { login } from '../../store/reducers/authReducer'

class LoginPage extends React.Component {

    onSubmit = (formData) => {
        debugger
        this.props.login(formData.login, formData.password)
    }

    componentDidUpdate() {
        console.log('updated');
        if (this.props.isAuth === true) {
            console.log('inside');
            debugger;
            return 
        }
    }

    render() {


        return (
            <div>
                <LoginReduxForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStatetoProprs = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStatetoProprs, { login })(LoginPage)