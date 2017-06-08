import React from 'react';
import { Field, FieldArray } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="section">
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderSkills = ({ fields, meta: { touched, error } }) => {
  return (
    <ul>
      {fields.map((keySkill, index) =>
        <li key={index}>
          <button
            type="button"
            title="Remove skill"
            onClick={() => fields.remove(index)}>Remove Skill</button>
          <Field
            name={keySkill}
            type="text"
            component={renderField}/>
        </li>
      )}
      <li>
        <button type="button" onClick={() => fields.push({})}>+ Add Skill</button>
      </li>
    </ul>
  )
}

const ResumeInfo = () => {
  return (
    <div>
      <div>
        <label htmlFor="profess_profile">Professional Profile</label>
        <Field name="profess_profile" component="textarea"/>
      </div>
      <div>
        <label htmlFor="key_skills">Key Skills</label>
        <FieldArray name="key_skills" component={renderSkills}/>
      </div>
    </div>
  )
}

export default ResumeInfo
