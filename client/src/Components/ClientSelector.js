import React from 'react';

let ClientData = () => {

  const populateSelect = (x) => {
    for (var index in x) {
      let row = document.createElement('tr');
      let first_name = document.createElement('td');
      let last_name = document.createElement('td');
      let dob = document.createElement('td');
      first_name.text = x[index].first_name;
      last_name.text = x[index].last_name;
      dob.text = x[index].dob;
      row.setAttribute('data-id', x[index].id);
      document.getElementById("client-table-body").appendChild(row);
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
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Job Developer</th>
          </tr>
        </thead>
        <tbody id="client-table-body">
          {getClients()}
        </tbody>
      </table>
    </div>
  );
}


  export default (ClientData);
