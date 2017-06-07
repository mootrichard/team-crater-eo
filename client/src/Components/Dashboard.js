import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import MasterForm from './MasterForm';
import ClientData from './ClientData';

class Dashboard extends Component {

    render(){
    return (
        <Router>
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><NavLink to="/masterform">Master Form</NavLink></li>
                                <li><NavLink to="/clients">Clients</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container text-center">
                    <Route path="/masterform" component={MasterForm} />
                    <Route path="/clients" component={ClientData} />
                </div>
            </div>
        </Router>
    )
    }
}

export default Dashboard;