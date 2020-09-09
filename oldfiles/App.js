import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StaffListContainer from './components/staffListContainer/StaffListContainer';
import LoginContainer from './components/loginContainer/LoginContainer';
import CreateMemberContainer from './components/staffListContainer/createMemberContainer/CreateMemberContainer';

const App = (props) => {
  // console.log(props)
  return (
    <BrowserRouter>
      <div>
        <Route path='/createMember' render={() => <CreateMemberContainer />} />
        <Route path='/staff' render={() => <StaffListContainer />} />
        <Route exact path='/' render={() => <LoginContainer />} />
      </div>
    </BrowserRouter>
  )
}

export default App;
