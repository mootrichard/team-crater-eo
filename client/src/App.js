import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import LoginForm from './Components/LoginForm';
import MasterForm from './Components/MasterForm';
import ClientData from './Components/ClientData';
import Logout from './Components/Logout';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      logInShowing:true
    };
    this.displayNav = this.displayNav.bind(this);
  }

  displayNav(){
    this.setState({
        logInShowing: !this.state.logInShowing
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
          { !this.state.logInShowing && <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container">
                <div id="navbar" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li><NavLink to="/masterform">Master Form</NavLink></li>
                    <li><NavLink to="/clients">Clients</NavLink></li>
                    <li><NavLink to="/logout">Logout</NavLink></li>
                  </ul>
                </div>
              </div>
            </nav> }
          <div>
            <div className="container text-center">
              <Route exact path="/" component={LoginForm} />
              <Route path="/dashboard" render={()=>(<Dashboard displayNav={this.displayNav} />)} />
              <Route path="/masterform" component={MasterForm} />
              <Route path="/clients" component={ClientData} />
              <Route path="/logout" render={()=>(<Logout displayNav={this.displayNav} />)} />
            </div>
          </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
