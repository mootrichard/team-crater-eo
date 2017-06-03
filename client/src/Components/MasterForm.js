import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.fname) {
    errors.fname = '* Required'
  }
  if (!values.lname) {
    errors.lname = '* Required'
  }
  return errors
}

const renderErrField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div className="err-output">
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderRefs = ({ fields, meta: { touched, error } }) => (
  <ul>
    {fields.map((reference, index) =>
      <li key={index}>
        <h4>Reference #{index + 1}</h4>
        <button
          type="button"
          title="Remove reference"
          onClick={() => fields.remove(index)}>Remove Reference #{index + 1}</button>
				<div>
					<Field
							name={`${reference}.ref_type`}
							type="radio"
							component={renderField}
							label="Personal"
							value="personal" />
					<Field
							name={`${reference}.ref_type`}
							type="radio"
							component={renderField}
							label="Business"
							value="business" />
				</div>
        <Field
          name={`${reference}.ref_fname`}
          type="text"
          component={renderField}
          label="First name"/>
        <Field
          name={`${reference}.ref_lname`}
          type="text"
          component={renderField}
          label="Last name"/>
        <Field
          name={`${reference}.ref_phone`}
          type="text"
          component={renderField}
          label="Phone"/>
        <Field
          name={`${reference}.ref_known`}
          type="text"
          component={renderField}
          label="Years known"/>
        <Field
          name={`${reference}.ref_notes`}
          type="text"
          component={renderField}
          label="Notes"/>

      </li>
    )}
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Reference</button>
      {touched && error && <span>{error}</span>}
    </li>
  </ul>
)


const renderExperience = ({ fields, meta: { touched, error } }) => (
  <ul>
    {fields.map((experience, index) =>
      <li key={index}>
        <h4>Experience #{index + 1}</h4>
        <button
          type="button"
          title="Remove experience"
          onClick={() => fields.remove(index)}>Remove Experience #{index + 1}</button>
        <Field
          name={`${experience}.org_name`}
          type="text"
          component={renderField}
          label="Organization"/>
        <Field
          name={`${experience}.pos_name`}
          type="text"
          component={renderField}
          label="Position"/>
        <Field
          name={`${experience}.loc`}
          type="text"
          component={renderField}
          label="Location"/>
        <Field
          name={`${experience}.emp_start`}
          type="date"
          component={renderField}
          label="Start date:"/>
        <Field
          name={`${experience}.emp_end`}
          type="date"
          component={renderField}
          label="End date:"/>
        <Field
          name={`${experience}.work_pay`}
          type="text"
          component={renderField}
          label="How much did you get paid?"/>
        <Field
          name={`${experience}.tasks`}
          type="text"
          component={renderField}
          label="Tasks/responsibilities"/>
        <Field
          name={`${experience}.reason_left`}
          type="text"
          component={renderField}
          label="Reason for leaving"/>

      </li>
    )}
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Experience</button>
      {touched && error && <span>{error}</span>}
    </li>
  </ul>
)

const selectState = ( {input}) => (
	<div>
		<Field {...input} component="select" type="select">
			<option></option>
			<option value="Alaska">Alaska</option>
			<option value="Alabama">Alabama</option>
			<option value="Arkansas">Arkansas</option>
			<option value="Arizona">Arizona</option>
			<option value="California">California</option>
			<option value="Colorado">Colorado</option>
			<option value="Connecticut">Connecticut</option>
			<option value="DC">District of Columbia (DC)</option>
			<option value="Delaware">Delaware</option>
			<option value="Florida">Florida</option>
			<option value="Georgia">Georgia</option>
			<option value="Hawaii">Hawaii</option>
			<option value="Iowa">Iowa</option>
			<option value="Idaho">Idaho</option>
			<option value="Illinois">Illinois</option>
			<option value="Indiana">Indiana</option>
			<option value="Kansas">Kansas</option>
			<option value="Kentucky">Kentucky</option>
			<option value="Louisiana">Louisiana</option>
			<option value="Massachusetts">Massachusetts</option>
			<option value="Maryland">Maryland</option>
			<option value="Maine">Maine</option>
			<option value="Michigan">Michigan</option>
			<option value="Minnesota">Minnesota</option>
			<option value="Missouri">Missouri</option>
			<option value="Mississippi">Mississippi</option>
			<option value="Montana">Montana</option>
			<option value="North Carolina">North Carolina</option>
			<option value="North Dakota">North Dakota</option>
			<option value="Nebraska">Nebraska</option>
			<option value="New Hampshire">New Hampshire</option>
			<option value="New Jersey">New Jersey</option>
			<option value="New Mexico">New Mexico</option>
			<option value="Nevada">Nevada</option>
			<option value="New York">New York</option>
			<option value="Ohio">Ohio</option>
			<option value="Oklahoma">Oklahoma</option>
			<option value="Oregon">Oregon</option>
			<option value="Pennsylvania">Pennsylvania</option>
			<option value="Rhode Island">Rhode Island</option>
			<option value="South Carolina">South Carolina</option>
			<option value="South Dakota">South Dakota</option>
			<option value="Tennessee">Tennessee</option>
			<option value="Texas">Texas</option>
			<option value="Utah">Utah</option>
			<option value="Virginia">Virginia</option>
			<option value="Virgin Islands">Virgin Islands</option>
			<option value="Vermont">Vermont</option>
			<option value="Washington">Washington</option>
			<option value="Wisconsin">Wisconsin</option>
			<option value="West Virginia">West Virginia</option>
			<option value="Wyoming">Wyoming</option>
		</Field>
	</div>
)

const MasterForm = (props) => {
	const { handleSubmit, pristine, submitting } = props;
	const createResume = (data) => {
		var win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=780, height=700, top="+(screen.height-400)+", left="+(screen.width-840));
		win.document.body.innerHTML = '<link type="text/css" rel="stylesheet" href="../styles/App.css"/>' +
																	'<div id="name"></div>' +
																	'<div id="address"><div id="street"></div><div id="location"></div></div>' +
																	'<div id="separator"></div>' +
																	'<div id="prof_prof"></div>' +
																  '<div id="skills"></div>' +
																	'<div id="prof_exp"><div id="emp_date"></div><div id="job_title"></div><div id="responsibilities"></div></div>' +
																	'<div id="education"></div>';
    win.document.getElementById('name').innerHTML = '<h1>' + data.fname + ' ' + data.lname + '</h1>';
		if (data.street1 && data.street2){
			win.document.getElementById('street').innerHTML = data.street1 + '<br>' + data.street2;
		} else if (data.street1) {
			win.document.getElementById('street').innerHTML = data.street1;
		}
		if (data.city && data.cli_state && data.zip) {
			win.document.getElementById('location').innerHTML = data.city + ', ' + data.cli_state + ' ' + data.zip;
		}
		win.document.getElementById('separator').innerHTML = '<hr>';
		if (data.profess_profile) {
			win.document.getElementById('prof_prof').innerHTML = '<h4>PROFESSIONAL PROFILE</h4>' + data.profess_profile;
		}
		if (data.key_skills) {
			win.document.getElementById('skills').innerHTML = '<h4>KEY SKILLS</h4><li>' + data.key_skills + '</li>';
		}
		if (data.emp_start && data.emp_end) {
			win.document.getElementsById('emp_date').innerHTML = '<b>' + data.emp_start + ' - ' + data.emp_end + '</b>';
		}
		if (data.org_name && data.loc) {
			win.document.getElementById('prof_exp').innerHTML = '<h4>PROFESSIONAL EXPERIENCE</h4><b>' + data.org_name + ' - ' + data.loc + ' - ' + data.pos_name + '</b>';
		}
		if (data.tasks) {
			win.document.getElementById('responsibilities').innerHTML = '<li>' + data.tasks + '</li>';
		}
		if (data.school_name && data.diploma) {
			win.document.getElementsById('education').innerHTML = '<h4>EDUCATION</h4> High School Diploma - ' + data.school_name;
		}
		//win.document.body.innerHTML = note.gender;
	};
	const postForm = (formData) => {
		fetch("/api/clients", {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(formData)
		})
		.then(res => res.json())
		.then(masterform => alert(JSON.stringify(masterform, null, 2)))
		.then(resume =>	createResume(JSON.parse(JSON.stringify(formData))));
	};
	return (
		<form onSubmit={ handleSubmit(postForm) }>
			<div className="master-form-container">
				<div>
					<div className="master-form-header">
						<h1>Master Application <Field name="letter" component="select">
														<option value="none"></option>
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
                            <option value="d">D</option>
                        </Field></h1>
					</div>
	        <h2>PERSONAL</h2>
					<div>
						<label htmlFor="fname">First name *</label>
						<Field name="fname" component={renderErrField} type="text"/>
					</div>
					<div>
  					<label htmlFor="lname">Last name *</label>
	  				<Field name="lname" component={renderErrField} type="text"/>
					</div>
					<div>
						<label htmlFor="dob">DOB</label>
						<Field name="dob" component="input" type="date"/>
					</div>
					<div>
					  <label htmlFor="race">Race</label>
						<Field name="race" component="input" type="text"/>
					</div>
					<div>
      			<label htmlFor="gender">Gender</label>
						<Field name="gender" component="input" type="text"/>
					</div>
					<div>
  				  <label htmlFor="phone">Phone</label>
	  				<Field name="phone" component="input" type="text"/>
					</div>
					<div>
  					<label htmlFor="email">Email</label>
	  				<Field name="email" component="input" type="email"/>
					</div>
          <div>
  					<label htmlFor="ssn">SSN</label>
	  				<Field name="ssn" component="input" type="text"/>
					</div>
            <div>
  					<label htmlFor="odl">ODL</label>
	  				<Field name="odl" component="input" type="text"/>
					</div>
					<div>
						<label htmlFor="foodhc">Food H/C?</label>
    					<label><Field name="foodhc" id="foodhc" component="input" type="radio" value="true"/> Yes</label>
    					<label><Field name="foodhc" id="foodhc" component="input" type="radio" value="false"/> No</label>
					</div>

          <div>
			      <h4>Address</h4>
	          <div>
	  					<label htmlFor="street1">Street Address 1</label>
		  				<Field name="street1" component="input" type="text"/>
						</div>
	          <div>
	  					<label htmlFor="street2">Street Address 2</label>
		  				<Field name="street2" component="input" type="text"/>
						</div>
						<div>
							<label htmlFor="po_box">PO Box</label>
							<Field name="po_box" component="input" type="text"/>
						</div>
						<div>
							<label htmlFor="apt_num">Apartment Number</label>
							<Field name="apt_num" component="input" type="text"/>
						</div>
	          <div>
	  					<label htmlFor="city">City</label>
		  				<Field name="city" component="input" type="text"/>
						</div>
						<div>
	  					<label htmlFor="cli_state">State</label>
							<Field name="cli_state" id="cli_state" component={selectState}/>
						</div>
	          <div>
	  					<label htmlFor="zip">Zip</label>
		  				<Field name="zip" component="input" type="text"/>
						</div>
					</div>

					<div>
					  <h3>Alternate Contact</h3>
	          <div>
	  					<label htmlFor="alt_fname">First name</label>
		  				<Field name="alt_fname" component="input" type="text"/>
						</div>
	          <div>
	  					<label htmlFor="alt_lname">Last name</label>
		  				<Field name="alt_lname" component="input" type="text"/>
						</div>
						<div>
	  					<label htmlFor="alt_rlnship">Relationship</label>
		  				<Field name="alt_rlnship" component="input" type="text"/>
						</div>
						<div>
	  					<label htmlFor="alt_phone">Phone</label>
		  				<Field name="alt_phone" component="input" type="text"/>
	          </div>
						<div>
	  					<label htmlFor="alt_street1">Street Address 1</label>
		  				<Field name="alt_street1" component="input" type="text"/>
						</div>
	          <div>
	  					<label htmlFor="alt_street2">Street Address 2</label>
		  				<Field name="alt_street2" component="input" type="text"/>
						</div>
						<div>
							<label htmlFor="alt_po_box">PO Box</label>
							<Field name="alt_po_box" component="input" type="text"/>
						</div>
						<div>
							<label htmlFor="alt_apt_num">Apartment Number</label>
							<Field name="alt_apt_num" component="input" type="text"/>
						</div>
	          <div>
	  					<label htmlFor="alt_city">City</label>
		  				<Field name="alt_city" component="input" type="text"/>
						</div>
	          <div>
	  					<label htmlFor="alt_state">State</label>
		  				<Field name="alt_state" id="alt_state" component={selectState}></Field>
						</div>
	          <div>
	  					<label htmlFor="alt_zip">Zip</label>
		  				<Field name="alt_zip" component="input" type="text"/>
						</div>
					</div>
				</div>

				<div>
		      <h2>GENERAL</h2>
          <div>
  				   <label htmlFor="date_avail">Date available for employment</label>
	  			   <Field name="date_avail" component="input" type="date"/>
					</div>
					<div>
					 	<label htmlFor="military">Have you served in the U.S. military?</label>
						<label><Field name="military" id="military" component="input" value="true" type="radio"/> Yes</label>
						<label><Field name="military" id="military" component="input" value="false" type="radio"/> No</label>
					</div>
					<div>
						<label htmlFor="misdemeanor">Have you ever been convicted of a misdemeanor?</label>
						<label><Field name="misdemeanor" id="misdemeanor" component="input" value="true" type="radio"/> Yes</label>
						<label><Field name="misdemeanor" id="misdemeanor" component="input" value="false" type="radio"/> No</label>
					</div>
          <div>
  					<label htmlFor="misdemeanor_exp">If yes, explain</label>
	  				<Field name="misdemeanor_exp" component="input" type="text"/>
					</div>
					<div>
						<label htmlFor="felony">Have you ever been convicted of a felony?</label>
						<label><Field name="felony" id="felony" component="input" value="true" type="radio"/> Yes</label>
						<label><Field name="felony" id="felony" component="input" value="false" type="radio"/> No</label>
					</div>
          <div>
  				  <label htmlFor="felony_exp">If yes, explain</label>
	  				<Field name="felony_exp" component="input" type="text"/>
					</div>
				</div>

				<div>
		      <h2>EDUCATION</h2>
				 	<div>
				    <h3>School</h3>
			      <div>
		  		 	  <label htmlFor="school_name">School name</label>
			  		  <Field name="school_name" component="input" type="text"/>
						</div>
						<div>
		  				<label htmlFor="ged">GED?</label>
			  			<label><Field name="ged" id="ged" component="input" value="true" type="radio"/> Yes</label>
			  			<label><Field name="ged" id="ged" component="input" value="false" type="radio"/> No</label>
						</div>
						<div>
							<label htmlFor="diploma">Diploma?</label>
							<label><Field name="diploma" id="diploma" component="input" value="true" type="radio"/> Yes</label>
							<label><Field name="diploma" id="diploma" component="input" value="false" type="radio"/> No</label>
						</div>

				    <h4>Address</h4>
		        <div>
		  				<label htmlFor="sch_street1">Street Address 1</label>
			  			<Field name="sch_street1" component="input" type="text"/>
						</div>
		        <div>
		  				<label htmlFor="sch_street2">Street Address 2</label>
			  			<Field name="sch_street2" component="input" type="text"/>
						</div>
		        <div>
		  				<label htmlFor="sch_city">City</label>
			  			<Field name="sch_city" component="input" type="text"/>
						</div>
		        <div>
		  					<label htmlFor="sch_state">State</label>
			  				<Field name="sch_state"  id="sch_state" component={selectState}></Field>
							</div>
		          <div>
		  					<label htmlFor="sch_zip">Zip</label>
			  				<Field name="sch_zip" component="input" type="text"/>
							</div>
					  </div>
					<div>
		      	<h3>College</h3>
	          <div>
	  					<label htmlFor="col_name">College name</label>
		  				<Field name="col_name" component="input" type="text"/>
						</div>
	          <div>
	  					<label htmlFor="cert_name">Qualification/Certificate</label>
		  				<Field name="cert_name" component="input" type="text"/>
						</div>
						<div>
			      	<h4>Address</h4>
		          <div>
		  					<label htmlFor="col_street1">Street Address 1</label>
			  				<Field name="col_street1" component="input" type="text"/>
							</div>
		          <div>
		  					<label htmlFor="col_street2">Street Address 2</label>
			  				<Field name="col_street2" component="input" type="text"/>
							</div>
		          <div>
		  					<label htmlFor="col_city">City</label>
			  				<Field name="col_city" component="input" type="text"/>
							</div>
		          <div>
		  					<label htmlFor="col_state">State</label>
			  				<Field name="col_state"  id="col_state" component={selectState}></Field>
							</div>
		          <div>
		  					<label htmlFor="col_zip">Zip</label>
			  				<Field name="col_zip" component="input" type="text"/>
							</div>
						</div>
					</div>

					<div>
			      <h3>Vocational/Specialized Training</h3>
	          <div>
	  					<label htmlFor="voc_cert_name">Qualification/Certificate</label>
		  				<Field name="voc_cert_name" component="input" type="text"/>
						</div>
					</div>
				</div>

        <div>
	      <h2>Work Preferences</h2>
					<div>
						<label htmlFor="fulltime">Full time</label>
						<Field name="fulltime" id="fulltime" component="input" type="checkbox"/>
						<label htmlFor="parttime">Part time</label>
						<Field name="parttime" id="parttime" component="input" type="checkbox"/>
          </div>
          <div>
      			<label htmlFor="num_hours"> How many hours?</label>
    	  		<Field name="num_hours" component="input" type="text"/>
          </div>
          <div>
      			<label htmlFor="expected_wage">Expected wage</label>
    	  		<Field name="expected_wage" component="input" type="text"/>
					</div>
					<div>
						<label>What days of the week? &nbsp;</label>
						<label htmlFor="monday"> M</label>
						<Field name="monday" id="monday" component="input" type="checkbox"/>
						<label htmlFor="tuesday"> T</label>
						<Field name="tuesday" id="tuesday" component="input" type="checkbox"/>
						<label htmlFor="wednesday"> W</label>
						<Field name="wednesday" id="wednesday" component="input" type="checkbox"/>
						<label htmlFor="thursday"> Th</label>
						<Field name="thursday" id="thursday" component="input" type="checkbox"/>
						<label htmlFor="friday"> F</label>
						<Field name="friday" id="friday" component="input" type="checkbox"/>
						<label htmlFor="saturday"> S</label>
						<Field name="saturday" id="saturday" component="input" type="checkbox"/>
						<label htmlFor="sunday"> Su</label>
						<Field name="sunday" id="sunday" component="input" type="checkbox"/>
					</div>
					<div>
					  <label>What hours?&nbsp;&nbsp;</label>
						<label htmlFor="hours_days">&nbsp;Days </label>
						<Field name="hours_days" id="hours_days" component="input" type="checkbox"/>
						<label htmlFor="hours_swing">&nbsp;Swing </label>
						<Field name="hours_swing" id="hours_swing" component="input" type="checkbox"/>
						<label htmlFor="hours_noc">&nbsp;NOC</label>
						<Field name="hours_noc" id="hours_noc" component="input" type="checkbox"/>
					</div>
          <div>
			     <label>Where would you prefer to work?&nbsp;</label>
						<label htmlFor="inside">&nbsp;Inside</label>
						<Field name="inside" id="inside" component="input" type="checkbox"/>
						<label htmlFor="outside">&nbsp;Outside</label>
						<Field name="outside" id="outside" component="input" type="checkbox"/>
          </div>
          <div>
  		    	<label htmlFor="geo_pref">Preferred geographical area</label>
	  	    	<Field name="geo_pref" component="input" type="text"/>
					</div>
				</div>

        <div>
	        <h2>Employment/Volunteer History</h2>
						<label htmlFor="no_work_exp">NO WORK/VOLUNTEER EXPERIENCE</label>
            <Field name="no_work_exp" id="work_exp" component="input" type="checkbox"/>
            <FieldArray name="experience" component={renderExperience}/>
				</div>

				<div>
		      <h2>REFERENCES</h2>
          <FieldArray name="reference" component={renderRefs}/>
				</div>

        <div>
		      <h2>Financial Information</h2>
					<div>
						<label htmlFor="consulted">Have you consulted a benefits professional?</label>
						<label><Field name="consulted" id="consulted" component="input" type="checkbox"/> Yes</label>
					</div>
          <div>
  					<label htmlFor="fin_exp">Are you aware if/how this will help with your employment search? Explain</label>
	  				<Field name="fin_exp" component="input" type="text"/>
					</div>
				</div>

				<div>
	      	<h2>Employment Services</h2>
					<div>
						<label htmlFor="other_agencies">Are you working with any other agency or employment service?</label>
						<label><Field name="other_agencies" id="other_agencies" component="input" type="checkbox"/>Yes</label>
					</div>
				</div>

				<div>
		      <h2>Transportation</h2>
					<div>
						<label htmlFor="license">Do you have a drivers license?</label>
						<label><Field name="license" id="license" component="input" value="true" type="radio"/> Yes</label>
						<label><Field name="license" id="license" component="input" value="false" type="radio"/> No</label>
					</div>
					<div>
						<label htmlFor="car_access">Do you have access to a car?</label>
						<label><Field name="car_access" id="car_access" component="input" value="true" type="radio"/> Yes</label>
						<label><Field name="car_access" id="car_access" component="input" value="false" type="radio"/> No</label>
					</div>
          <div>
  					<label htmlFor="transport_exp">If not, mode of transport used</label>
	  				<Field name="transport_exp" component="input" type="text"/>
					</div>
				</div>

				<div>
			    <h2>Substance/Medication Use</h2>
					<div>
						<label htmlFor="drug_screen">Can you pass a drug screen?</label>
						<label><Field name="drug_screen" id="drug_screen" component="input" value="true" type="radio"/> Yes</label>
						<label><Field name="drug_screen" id="drug_screen" component="input" value="false" type="radio"/> No</label>
					</div>
          <div>
  			    <label htmlFor="med_use">Medications that could be a barrier to employment</label>
	 			    <Field name="med_use" component="input" type="text"/>
					</div>
				</div>

				<div>
		      <h2>Personal Information</h2>
					<div>
						<label htmlFor="resume">Do you have a resume?</label>
						<label><Field name="resume" id="resume" component="input" value="true" type="radio"/> Yes</label>
						<label><Field name="resume" id="resume" component="input" value="false" type="radio"/> No</label>
          </div>
					<div>
						<label htmlFor="comp_access">Do you have access to a computer?</label>
						<label><Field name="comp_access" id="comp_access" component="input" value="true" type="radio"/> Yes</label>
						<label><Field name="comp_access" id="comp_access" component="input" value="false" type="radio"/> No</label>
          </div>
					<div>
						<label htmlFor="online_app">Are you able to complete your own online application?</label>
						<label><Field name="online_app" id="online_app" component="input" value="true" type="radio"/> Yes</label>
						<label><Field name="online_app" id="online_app" component="input" value="false" type="radio"/> No</label>
					</div>
					<div>
						<label htmlFor="paper_app">Are you able to complete your own paper application?</label>
						<label><Field name="paper_app" id="paper_app" component="input" value="true" type="radio"/> Yes</label>
						<label><Field name="paper_app" id="paper_app" component="input" value="false" type="radio"/> No</label>
					</div>
          <div>
      			<label htmlFor="emp_goal">Employment goal</label>
    	  		<Field name="emp_goal" component="input" type="text"/>
					</div>
          <div>
  			    <label htmlFor="venue">Meeting venue</label>
	  		    <Field name="venue" component="input" type="text"/>
					</div>
          <div>
  				  <label htmlFor="barriers">Conditions that present possible barriers to employment</label>
	  			  <Field name="barriers" component="input" type="text"/>
					</div>
          <div>
  				  <label htmlFor="notes">Notes</label>
	  			  <Field name="notes" component="textarea"/>
					</div>
					<div>
						<label htmlFor="photo">Photo: &nbsp;</label>
						<Field name="photo" component="input" type="file"/>
					</div>
				</div>
				<div>
					<h2>Resume Information</h2>
					<div>
						<label htmlFor="profess_profile">Professional Profile</label>
						<Field name="profess_profile" component="textarea"/>
					</div>
					<div>
						<label htmlFor="key_skills">Key Skills</label>
						<Field name="key_skills" component="input" type="text"/>
					</div>
				</div>
				<div>
					<button className="submit-button" type="submit" disabled={pristine || submitting}>Submit</button>
				</div>
			</div>
		</form>
	);
}

export default reduxForm({
	form: 'masterform',
	validate
})(MasterForm);
