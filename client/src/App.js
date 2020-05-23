import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import Main from './pages/Main'

//components
import Navbar from './components/Navbars'

// routes definition
const routes = [
  {
    path: '/',
    exact: true,
    children: <Main />
  }
]

function App() {
  return (
    <Router>
    <div>
      <Navbar />
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
