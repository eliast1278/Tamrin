import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import signUp from "./page/signUp"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={signUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
