import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    componentWillUnmount(){
        this.props.displayNav();
    }

    render(){
        localStorage.removeItem("token");
        return (
            <Redirect to="/" />
        )
    }
};

export default Logout;