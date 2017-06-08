import React from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm, formValueSelector } from 'redux-form'
import ClientSelector from './ClientSelector'
import UserHeader from './UserHeader'
import UserNavBar from './UserNavBar'

let ClientData = (props) => {
  const {
    indexValue, handleSubmit
  } = props;

  const getClients = (id) => {
    fetch(`/api/clients/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'JWT '+localStorage.getItem("token")
      },
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      let json_data = JSON.stringify(json);
      let json_object = JSON.parse(json_data);
      console.log(json_object);
    });
  };

  const displayData = (data) => {
   alert(data.clientselect);
   console.log(data);
   getClients(data.clientselect);
  };




  return (
    <div className="clients-page">
      <UserHeader />
      <div className="container flexbox">
        <UserNavBar />
        <ClientSelector />
      </div>
    </div>
  );
};

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
