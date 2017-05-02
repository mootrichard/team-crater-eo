import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
 	Redirect} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Login = () => (
  <div>
    <h2>Login</h2>
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
        <Router>
          <div className="App">
            <nav>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </nav>

            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
    );
  }
}

export default App;
