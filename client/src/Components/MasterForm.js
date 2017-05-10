import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MasterForm = (props) => {
	const { handleSubmit, pristine, submitting } = props
	return (
		<form onSubmit={handleSubmit}>
			<div className="master-form-container">
				<div>
					<div>
						<h1>Master Application</h1>
					</div>
	        <h2>PERSONAL</h2>
					<div>
						<label htmlFor="fname">First name </label>
						<Field name="fname" component="input" type="text"/>
					</div>
					<div>
  					<label htmlFor="lname">Last name</label>
	  				<Field name="lname" component="input" type="text"/>
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
						<div>
							<label><Field name="gender" component="input" type="radio" value="male"/> Male</label>
							<label><Field name="gender" component="input" type="radio" value="female"/> Female</label>
							<label><Field name="gender" component="input" type="radio" value="other"/> Other</label>
						</div>
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
						<Field name="foodhc" id="foodhc" component="input" type="checkbox"/>
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
	  					<label htmlFor="city">City</label>
		  				<Field name="city" component="input" type="text"/>
						</div>
						<div>
	  					<label htmlFor="state">State</label>
		  				<Field name="state" component="input" type="text"/>
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
	  					<label htmlFor="alt_city">City</label>
		  				<Field name="alt_city" component="input" type="text"/>
						</div>
	          <div>
	  					<label htmlFor="alt_state">State</label>
		  				<Field name="alt_state" component="input" type="text"/>
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
						<Field name="military" id="military" component="input" type="checkbox"/>
					</div>
					<div>
						<label htmlFor="misdemeanor">Have you ever been convicted of a misdemeanor?</label>
						<Field name="misdemeanor" id="misdemeanor" component="input" type="checkbox"/>
					</div>
          <div>
  					<label htmlFor="misdemeanor_exp">If yes, explain</label>
	  				<Field name="misdemeanor_exp" component="input" type="text"/>
					</div>
					<div>
						<label htmlFor="felony">Have you ever been convicted of a felony?</label>
						<Field name="felony" id="felony" component="input" type="checkbox"/>
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
			  				<Field name="ged" id="ged" component="input" type="checkbox"/>
							</div>
							<div>
								<label htmlFor="diploma">Diploma?</label>
								<Field name="diploma" id="diploma" component="input" type="checkbox"/>
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
			  				<Field name="sch_state" component="input" type="text"/>
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
			  				<Field name="col_state" component="input" type="text"/>
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
					</div>
					<div>
						<label htmlFor="parttime">Part time</label>
						<Field name="parttime" id="parttime" component="input" type="checkbox"/>
					</div>
					<div>
						<label htmlFor="monday">What days of the week?</label>
						<Field name="parttime" component="input" type="text"/>
					</div>
					<div>
						<label htmlFor="hours_days">Days?</label>
						<Field name="hours_days" id="hours_days" component="input" type="checkbox"/>
					</div>
					<div>
						<label htmlFor="hours_swing">Swing?</label>
						<Field name="hours_swing" id="hours_swing" component="input" type="checkbox"/>
					</div>
					<div>
						<label htmlFor="hours_noc">NOC?</label>
						<Field name="hours_noc" id="hours_noc" component="input" type="checkbox"/>
					</div>
          <div>
  					<label htmlFor="num_hours">Preferred number of hours</label>
	  				<Field name="num_hours" component="input" type="text"/>
					</div>
          <div>
  					<label htmlFor="expected_wage">Expected wage</label>
	  				<Field name="expected_wage" component="input" type="text"/>
					</div>
          <div>
  					<label htmlFor="geo_pref">Preferred geographical area</label>
	  				<Field name="geo_pref" component="input" type="text"/>
					</div>
				</div>

        <div>
	        <h2>Employment/Volunteer History</h2>
					<div>
						<label htmlFor="work_exp">NO WORK/VOLUNTEER EXPERIENCE</label>
						<Field name="work_exp" id="work_exp" component="input" type="checkbox"/>
					</div>
          <div>
  					<label htmlFor="org_name">Organization</label>
	  				<Field name="org_name" component="input" type="text"/>
					</div>
          <div>
  					<label htmlFor="pos_name">Position</label>
	  				<Field name="pos_name" component="input" type="text"/>
					</div>
          <div>
  					<label htmlFor="loc">Location</label>
	  				<Field name="loc" component="input" type="text"/>
					</div>
          <div>
  					<label htmlFor="work_pay">How much you got paid</label>
	  				<Field name="work_pay" component="input" type="text"/>
					</div>
          <div>
  					<label htmlFor="tasks">Tasks/responsibilities</label>
	  				<Field name="tasks" component="input" type="text"/>
					</div>
          <div>
  					<label htmlFor="reason_left">Reason for leaving</label>
	  				<Field name="reason_left" component="input" type="text"/>
					</div>
				</div>

				<div>
		      <h2>REFERENCES</h2>
					<div>
						<label htmlFor="ref_business">Business reference</label>
						<Field name="ref_business" id="ref_business" component="input" type="checkbox"/>
					</div>
					<div>
						<label htmlFor="ref_personal">Personal reference</label>
						<Field name="ref_personal" id="ref_personal" component="input" type="checkbox"/>
					</div>
					<div>
						<label htmlFor="parttime">Part time</label>
						<Field name="parttime" id="parttime" component="input" type="checkbox"/>
					</div>
          <div>
  					<label htmlFor="ref_fname">First name</label>
	  				<Field name="ref_fname" component="input" type="text"/>
					</div>
          <div>
  					<label htmlFor="ref_lname">Last name</label>
	  				<Field name="ref_lname" component="input" type="text"/>
					</div>
          <div>
  					<label htmlFor="ref_phone">Phone</label>
	  				<Field name="ref_phone" component="input" type="text"/>
					</div>
          <div>
  					<label htmlFor="ref_known">Years known</label>
	  				<Field name="ref_known" component="input" type="text"/>
					</div>
          <div>
  					<label htmlFor="ref_notes">Notes</label>
	  				<Field name="ref_notes" component="textarea"/>
					</div>
				</div>

        <div>
		      <h2>Financial Information</h2>
					<div>
						<label htmlFor="consulted">Have you consulted a benefits professional?</label>
						<Field name="consulted" id="consulted" component="input" type="checkbox"/>
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
						<Field name="other_agencies" id="other_agencies" component="input" type="checkbox"/>
					</div>
				</div>

				<div>
		      <h2>Transportation</h2>
					<div>
						<label htmlFor="license">Do you have a drivers license?</label>
						<Field name="license" id="license" component="input" type="checkbox"/>
					</div>
					<div>
						<label htmlFor="car_access">Do you have access to a car?</label>
						<Field name="car_access" id="car_access" component="input" type="checkbox"/>
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
						<Field name="drug_screen" id="drug_screen" component="input" type="checkbox"/>
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
						<Field name="resume" id="resume" component="input" type="checkbox"/>
					</div>
					<div>
						<label htmlFor="comp_access">Part time</label>
						<Field name="comp_access" id="comp_access" component="input" type="checkbox"/>
					</div>
					<div>
						<label htmlFor="online_app">Are you able to complete your own online application?</label>
						<Field name="online_app" id="online_app" component="input" type="checkbox"/>
					</div>
					<div>
						<label htmlFor="paper_app">Are you able to complete your own paper application?</label>
						<Field name="paper_app" id="paper_app" component="input" type="checkbox"/>
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
						<label htmlFor="photo">Photo</label>
						<Field name="photo" component="input" type="file"/>
					</div>
				</div>
				<div>
					<button type="submit" disabled={pristine || submitting}>Submit</button>
				</div>
			</div>
		</form>
	);
}

export default reduxForm({
	form: 'masterapp'
})(MasterForm);
