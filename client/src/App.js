import React, { Component } from 'react';
import './App.css';
import MasterForm from './Components/MasterForm.js';
import ClientData from './Components/ClientData.js';
import {
  BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginForm from './Components/LoginForm';

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
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container">
                <div id="navbar" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/masterform">Master Form</Link></li>
                    <li><Link to="/clients">Clients</Link></li>
                  </ul>
                </div>
              </div>
            </nav>

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
