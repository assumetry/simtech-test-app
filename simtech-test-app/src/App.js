import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import StaffPage from './components/staffPage/StaffPage';
import { connect } from 'react-redux';
import CreateMemberContainer from './components/staffPage/createMemberContainer/CreateMemberContainer';
import LoginPageContainer from './components/loginPage/loginPageContainer';
import StaffItemCard from './components/StaffItemCard/StaffItemCard';

const App = (props) => {

  return (
    <BrowserRouter>
      <div>

        <Route exact path='/' render={() => (
          // Перенаправляем админа, если данные совпали
          props.state.isAuth === true && props.state.isAdmin ? <Redirect to={'/staff'} />
            : <LoginPageContainer />)} />

        <Route path='/staff' render={() => <StaffPage />} />

        <Route path={'/createMember'}>
          <CreateMemberContainer />
        </Route>
        
        <Route path={'/staffMEMBER'}>
          <StaffItemCard
            isAuth={props.state.isAuth}
            userPhoto={props.state.userPhoto}
            userName={props.state.userName}
            userLastname={props.state.userLastname}
            userDepartment={props.state.userDepartment}
            userEmail={props.state.userEmail}
            userPhoneNumber={props.state.userPhoneNumber}
          />
        </Route>

      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    state: state.auth
  }
}

export default connect(mapStateToProps, {})(App);
