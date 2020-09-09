import React from 'react';
import style from './LoginContainer.module.css'
import { connect } from 'react-redux'
import LoginReduxForm from './loginForm';


const LoginContainer = (props) => {
    console.log(props)
    // debugger

    const onSubmit = (formData) => {

        props.memberList.map((i) => {
            if (formData.login === i.login && formData.password === i.password) {
                if (i.isAdmin === true) {
                    console.log('redirect')
                }
            }
        })
    }

    return (
        <div className={style.wrapperContainer}>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    // console.log(state)
    return {
        memberList: state.staffListReducer.memberList
    }
}

export default connect(mapStateToProps, {})(LoginContainer)