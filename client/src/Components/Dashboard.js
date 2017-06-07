import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import MasterForm from './MasterForm';
import ClientData from './ClientData';
import Logout from './Logout';

class Dashboard extends Component {
    componentWillMount(){
        this.props.displayNav();
    }

    render(){
        return (
                    <div className="container text-center">
                        <Route path="/masterform" component={MasterForm} />
                        <Route path="/clients" component={ClientData} />
                        <Route path="/logout" component={Logout} />
                    </div>
        )
    }
}

export default Dashboard;