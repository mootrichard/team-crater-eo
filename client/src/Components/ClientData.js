import React from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm, formValueSelector } from 'redux-form'
import ClientSelector from './ClientSelector'

let ClientData = (props) => {
  const {
    indexValue, handleSubmit
  } = props;

  const getClients = (id) => {
    fetch(`/api/clients/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      var json_data = JSON.stringify(json);
      var json_object = JSON.parse(json_data);
      console.log(json_object);
    });
  };

 const displayData = (data) => {
   alert(data.clientselect);
   console.log(data);
   getClients(data.clientselect);
 };

  return (
    <form onSubmit={handleSubmit(displayData)}>
      <div>
        <label>Choose a client: </label>
        <div>
          <Field name="client_select" component={ClientSelector}></Field>
        </div>
        {indexValue}
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

const selector = formValueSelector('clientform')
ClientData = connect(
  state => {
    const indexValue = selector(state, 'client_select')
    return { indexValue }
  }
) (ClientData)

ClientData = reduxForm({
  form: 'clientform'  // a unique identifier for this form
})(ClientData)

export default (ClientData);
