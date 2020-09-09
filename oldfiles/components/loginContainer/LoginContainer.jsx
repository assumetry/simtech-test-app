import React from 'react';
import style from './LoginContainer.module.css'
import { connect } from 'react-redux'
import LoginReduxForm from './loginForm';
import { Redirect, withRouter } from 'react-router-dom';
import { LOG_IN } from '../../store/reducers/authReducer'


const LoginContainer = (props) => {
    console.log(props.isAuth)

    if (props.isAuth === true) {
        return <Redirect to={'/staff'} />
    }

    const onSubmit = (formData) => {
        props.memberList.filter((i) => {
            if (formData.login === i.login && formData.password === i.password) {
                if (i.isAdmin === true) {
                    alert('correct')
                    LOG_IN()
                }
            }
        })
    }

    // props.memberList.filter((i) => {
    //     if (formData.login === i.login && formData.password === i.password) {
    //         if (i.isAdmin === true) {
    //             // console.log(props)
    //             props.history.push('/staff')
    //         } else {
    //             // console.log('user')
    //             props.history.push('/staff/' + i.userID)
    //         }
    //     }
    //     return <Redirect to={'/createMember'} />
    // })


    return (
        <div className={style.wrapperContainer}>
            <LoginReduxForm onSubmit={onSubmit} />
            <button onClick={() => { return <Redirect to={'/staff/'} /> }}>Staff</button>
        </div >
    )
}

let mapStateToProps = (state) => {
    // console.log(state)
    return {
        isAuth: state.auth.isAuth,
        memberList: state.staffListReducer.memberList
    }
}

let LoginContainerRedux = connect(mapStateToProps, {
    LOG_IN,
})(LoginContainer)

export default withRouter(LoginContainerRedux)