import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginForm from './Components/LoginForm';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class App extends Component {
  state = {users: []}

  // This is just testing the Users route to make sure its working
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <nav>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </nav>

            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
