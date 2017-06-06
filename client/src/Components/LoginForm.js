import React from 'react';
import BodyClassName from 'react-body-classname';
import { Field, reduxForm } from 'redux-form';

import logo from '../images/eo-logo.png';

const LoginForm  = (props) => {
	const { handleSubmit, pristine, submitting, logIn } = props;
	const authenticate = (formData) => {
		fetch("/login", {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(formData)
		})
		.then(res=> res.json())
		.then((login) => {
			alert(JSON.stringify(login, null, 2));
			localStorage.setItem("token", login.token);
			logIn(login.token);
		});
	};
	return(
			<BodyClassName className="login-page">
				<div className="login-form">
					<div className="logo-wrapper">
						<img src={logo} alt="Employment Options" />
					</div>
					<form className="form-horizontal" onSubmit={handleSubmit(authenticate)} >
						<div className="form-group">
							<label className="col-sm-2 control-label" >Username: </label>
							<div className="col-sm-6">
								<Field
									type="text"
									component="input"
									name="username"
									className="form-control col-sm-10" />
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-2 control-label">Password: </label>
							<div className="col-sm-6">
								<Field
									type="password"
									component="input"
									name="password"
									className="form-control"/>
							</div>
						</div>
						<div className="button-wrapper">
							<button className="btn btn-default" type="submit" disabled={pristine || submitting}>Submit</button>
						</div>
					</form>
				</div>
			</BodyClassName>
	)
}

export default reduxForm({form: 'login'})(LoginForm);
