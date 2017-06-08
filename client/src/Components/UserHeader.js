import React from 'react';

import logo from '../images/eo-logo.png';

class UserHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    let _this = this;
    this.getCurrentUser =
      fetch(`/api/users/current/`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'JWT ' + localStorage.getItem("token")
        },
        method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        _this.setState({
          name: responseJson.first_name
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillUnmount() {
    this.getCurrentUser.abort();
  }

  render() {
    return (
        <div className="user-header flexbox">
          <div className="logo-wrapper">
            <img src={logo} alt="Employment Options" />
          </div>
          <h1>Hi, {this.state.name}</h1>
        </div>
    );
  }
}

export default UserHeader