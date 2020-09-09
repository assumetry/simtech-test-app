import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import DepartmentItem from './DepartmentItem';
import { connect } from 'react-redux';

class StaffListContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        alert('update')
    }

    render() {
        if (this.props.isAuth === false) {
            return <Redirect to={'/'} />
        }

        return <>
            <div>
                <NavLink to='/createMember'><button>Create Member</button></NavLink>
            </div>

            <div>
                {
                    this.props.department.map((i) => {
                        // console.log(i)
                        return < DepartmentItem department={i} memberList={this.props.memberList} />
                    })
                }
            </div>

        </>
    }
}
let mapStateToProps = (state) => {
    // console.log(state)
    return {
        isAuth: state.auth.isAuth,
        department: state.staffListReducer.department,
        memberList: state.staffListReducer.memberList
    }
}

export default connect(mapStateToProps, {})(StaffListContainer)