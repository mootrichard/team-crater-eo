import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm  = (props) => {
	const { handleSubmit, pristine, submitting } = props;
	return(
			<form onSubmit={handleSubmit} >
				<div>
					<label>Username: </label>
					<Field
						type="text"
						component="input"
						name="username" />
				</div>
				<div>
					<label>Password: </label>
					<Field
						type="password"
						component="input"
						name="password" />
				</div>
				<button type="submit" disabled={pristine || submitting}>Submit</button>
			</form>
	)
}

export default reduxForm({form: 'login'})(LoginForm);
