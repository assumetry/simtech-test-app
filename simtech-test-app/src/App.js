import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import LoginPage from './components/loginPage/loginPage';
import StaffPage from './components/staffPage/StaffPage';
import { connect } from 'react-redux';
import CreateMemberContainer from './components/staffPage/createMemberContainer/CreateMemberContainer';

const App = (props) => {

  return (
    <BrowserRouter>
      <div>

        <Route exact path='/' render={() => (
          props.isAuth === true ? <Redirect to={'/staff'} />
            : <LoginPage />)} />

        <Route path='/staff' render={() => <StaffPage />} />
        
        <Route path={'/createMember'}>
          <CreateMemberContainer />
        </Route>
        
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {})(App);
