import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import Main from './pages/Main'
import Home from './pages/Home'

// routes definition
const routes = [
  {
    path: '/',
    exact: true,
    children: <Main />
  },
  {
    path: '/home',
    children: <Home />
  }
]

function App() {
  return (
    <Router>
    <div>
      <Switch>
        {routes.map((route, key) => (
          <Route key={key} {...route}/>
        ))}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
