import React, { Component } from 'react';
import InputText from './InputText';

class Login extends Component {
	render() {
		return (
			<div>
				<h2>Login</h2>
				<InputText type="text" name="username" label="username: " />
				<InputText type="password" name="password" label="password: " />
			</div>
		)
	}
}

export default Login;
