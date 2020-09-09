import React from 'react';
import { connect } from 'react-redux';
import { addMember } from '../../../store/reducers/staffReducer'
import CreateMember from './CreateMember';

let CreateMemberContainer = (props) => {

    let addMember = (formData) => {
        props.addMember(formData)
    }
    return (
        <div>
            <CreateMember addMember={addMember} />
        </div>
    )
}

let mapStateToProps = (state) => {
    // console.log(state)
    return {

    }
}

export default connect(mapStateToProps, {
    addMember
})(CreateMemberContainer)

