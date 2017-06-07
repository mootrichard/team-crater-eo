import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import LoginForm from './Components/LoginForm';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="container text-center">
              <Route exact path="/" component={LoginForm} />
              <Route path="/dashboard" component={Dashboard} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
