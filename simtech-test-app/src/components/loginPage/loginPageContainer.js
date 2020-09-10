import React from 'react';
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom';
import LoginPage from './loginPage';
import { login } from '../../store/reducers/authReducer'

class LoginPageContainer extends React.Component {

    onSubmit = (formData) => {
        debugger
        this.props.login(formData.login, formData.password)
    }

    render() {
        return (
            <Route exact path='/' render={() => (
                this.props.isAuth === true && this.props.isAdmin === false ? <Redirect to={'/staffMEMBER'} />
                  : <LoginPage onSubmit={this.onSubmit} />)} />

        )
    }
}

const mapStatetoProprs = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isAdmin: state.auth.isAdmin
    }
}
export default connect(mapStatetoProprs, { login })(LoginPageContainer)