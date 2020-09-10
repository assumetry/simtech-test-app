import React from 'react';
import { connect } from 'react-redux';
import { getStaffData } from '../../store/reducers/staffReducer';
import DepartmentItem from './DepartmentItem';
import CreateMemberContainer from './createMemberContainer/CreateMemberContainer';
import { withAutoRedirect } from '../../hoc/autoRedirect'

class StaffPage extends React.Component {
    componentDidMount() {
        debugger;
        console.log(this.props);
        if (this.props.memberList.length == 0) {
            this.props.getStaffData()
        }
    }
    render() {
        console.log('updated');
        return <>
            {
                this.props.department.map((i) => {
                    // debugger;
                    return <DepartmentItem department={i} memberList={this.props.memberList}/>
                })
            }
            <div>
                <CreateMemberContainer />
            </div>
        </>
    }
}
const mapStateToProps = (state) => {
    return {
        memberList: state.staffReducer.memberList,
        department: state.staffReducer.department,
        isAuth: state.auth.isAuth,
    }
}

const StaffPageWithRedirect = withAutoRedirect(StaffPage)

export default connect(mapStateToProps, {
    getStaffData,
})(StaffPageWithRedirect)