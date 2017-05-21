import React from 'react';
import { Field } from 'redux-form';

const ResumeInfo = () => {
  return (
    <div>
      <div>
        <label htmlFor="profess_profile">Professional Profile</label>
        <Field name="profess_profile" component="textarea"/>
      </div>
      <div>
        <label htmlFor="key_skills">Key Skills</label>
        <Field name="key_skills" component="input" type="text"/>
      </div>
    </div>
  )
}

export default ResumeInfo
