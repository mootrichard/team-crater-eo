import React, { Component } from 'react';
import './App.css';
import MasterForm from './MasterForm.js'
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <nav>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/masterapp">MasterForm</Link></li>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/masterapp" component={MasterForm} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
