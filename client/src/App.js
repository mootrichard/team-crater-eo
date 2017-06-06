import React, { Component } from 'react';
import './App.css';
import MasterForm from './Components/MasterForm.js';
import ClientData from './Components/ClientData.js';
import LoginForm from './Components/LoginForm';
import {
  BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const Home = () => (
  <div className="container">
    <h2>Home</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="container text-center">
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginForm} />
              <Route path="/masterform" component={MasterForm} />
              <Route path="/clients" component={ClientData} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
