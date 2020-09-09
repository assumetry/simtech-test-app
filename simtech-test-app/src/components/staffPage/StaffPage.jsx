import React from 'react';
import { connect } from 'react-redux';
import { getStaffData } from '../../store/reducers/staffReducer';
import { NavLink } from 'react-router-dom';
import DepartmentItem from './DepartmentItem';

class StaffPage extends React.Component {

    componentDidMount() {
        this.props.getStaffData()
    }

    
    render() {
        return <>
            <NavLink to={'/createMember'}>
                <button>Create Member</button>
            </NavLink>
            {
                this.props.department.map((i) => {
                    return <DepartmentItem department={i} />
                })
            }
        </>
    }
}
const mapStateToProps = (state) => {
    return {
        memberList: state.staffReducer.memberList,
        department: state.staffReducer.department,
    }
}
export default connect(mapStateToProps, {
    getStaffData,
})(StaffPage)