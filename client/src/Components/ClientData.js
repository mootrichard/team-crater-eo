import React from 'react';

const ClientData = () => {
  const populateSelect = (x) => {
    console.log(x);
    for (var index in x) {
      console.log(x[index]);
      console.log("here1");
      var node = document.createElement('option');
      node.text = x[index].first_name + ' ' + x[index].last_name;
      node.value = x[index].id;
      document.getElementById("client_select").appendChild(node);
    }
  };
  const getForm = () => {
    fetch("/api/clients", {
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
      populateSelect(json_object);
    });
  };

  return (
    <div>
    <div>
      <h3>Clients</h3>
      <div id="client_div">
        <select id="client_select">
          <option></option>
        </select>

      </div>
      {getForm()}
    </div>
    </div>
  );
}

export default (ClientData);
