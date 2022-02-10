import React from 'react';
import { Route, Switch } from 'react-router-dom';
import login from './pages/Login';
import wallet from './pages/Wallet';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ login } />
      <Route exact path="/carteira" component={ wallet } />
    </Switch>
  );
}

export default App;
