import React from 'react';
import {Field} from 'redux-form'

let ClientData = () => {

  const populateSelect = (x) => {
    for (var index in x) {
      var node = document.createElement('option');
      node.text = x[index].first_name + ' ' + x[index].last_name;
      node.value = x[index].id;
      document.getElementById("clientselect").appendChild(node);
    }
  };

  const getClients = () => {
    fetch("/api/clients", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'JWT '+localStorage.getItem("token")
      },
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      var json_data = JSON.stringify(json);
      var json_object = JSON.parse(json_data);
      populateSelect(json_object);
    });
  };

  return (
    <div>
      <Field name="clientselect" id="clientselect" component="select">
        <option></option>
        {getClients()}
      </Field>
    </div>
  );
}


  export default (ClientData);
