import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class StaffPage extends React.Component {
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
               
            </div>

        </>
    }
}
let mapStateToProps = (state) => {
    // console.log(state)
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {})(StaffPage)