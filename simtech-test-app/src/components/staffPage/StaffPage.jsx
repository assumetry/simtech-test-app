import React from 'react';
import { connect } from 'react-redux';
import { getStaffData } from '../../store/reducers/staffReducer';
import DepartmentItem from './DepartmentItem';
import CreateMemberContainer from './createMemberContainer/CreateMemberContainer';
import { withAutoRedirect } from '../../hoc/autoRedirect'

class StaffPage extends React.Component {

    // При загрузке компоненты, если нет данных в store, запрашиваем их
    componentDidMount() {
        if (this.props.memberList.length == 0) {
            this.props.getStaffData()
        }
    }

    render() {
        return <>
            {
                // Передаем параметр isAuth для корректной работы HOC'a
                this.props.department.map((i) => {
                    return <DepartmentItem department={i} isAuth={this.props.isAuth} memberList={this.props.memberList}/>
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