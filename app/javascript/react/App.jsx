import React from 'react'
import { Router, Route } from 'react-router';
import history from './history';

import SigninForm from './containers/SigninForm';
import PokerBoard from './containers/PokerBoard';

const App = (props) => {
  return (
    <Router history={history}>
      <Route exact path='/' component={SigninForm} />
      <Route exact path='/room/:id' component={PokerBoard} />
    </Router>
  )
}

export default App;
