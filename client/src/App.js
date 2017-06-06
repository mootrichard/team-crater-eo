import React, { Component } from 'react';
import './App.css';
import MasterForm from './Components/MasterForm.js';
import ClientData from './Components/ClientData.js';
import LoginForm from './Components/LoginForm';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const Home = () => (
  <div className="container">
    <h2>Home</h2>
  </div>
)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };

    this.logIn = this.logIn.bind(this);
  }

  logIn = (token)=>{
    if(token){
        this.setState({
            loggedIn: true
        })
    }
  };

  componentWillMount = ()=>{
    this.logIn(localStorage.getItem('token'))
  };


  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="container text-center">
              <Route exact path="/" component={Home} />
              <Route path="/login" render={(props)=>{return (<LoginForm logIn={this.logIn} />)}} />
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
