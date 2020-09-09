import React from 'react';
import { connect } from 'react-redux';
import { addMember } from '../../../store/reducers/staffListR'
import CreateMemberPage from './CreateMemberPage';
import { withRouter } from 'react-router-dom'

let CreateMemberContainer = (props) => {

    let addMember = (formData) => {
        props.addMember(formData)
        props.history.push('/staff')
    }
    return (
        <div>
            <CreateMemberPage addMember={addMember}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    // console.log(state)
    return {

    }
}

let CreateMember = connect(mapStateToProps, {
    addMember
})(CreateMemberContainer)

export default withRouter(CreateMember)

