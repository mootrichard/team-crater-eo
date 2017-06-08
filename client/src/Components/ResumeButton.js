const MasterForm = (props) => {
	const { handleSubmit, pristine, submitting } = props;

	const postForm = (formData) => {
		fetch("/api/clients", {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'JWT '+localStorage.getItem("token")
			},
			method: 'POST',
			body: JSON.stringify(formData)
		})
		.then(res => res.json())
		.then(masterform => alert(JSON.stringify(masterform, null, 2)))
		.then(resume =>	createResume(JSON.parse(JSON.stringify(formData))));
	};
	return (
		<div className="master-form-page">
    </div>
  );
};

export default reduxForm({
  form: 'masterform',
  validate
})(MasterForm);
