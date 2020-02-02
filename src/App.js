import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Weather from "./page/WeatherWidget"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Weather} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
