import React, { Component } from 'react';

class ClientData extends Component {
  constructor(props){
    super(props);
    this.populateTable = this.populateTable.bind(this);
    this.getClients = this.getClients.bind(this);
    this.state = {
      clientData: {}
    }
  }

  componentDidMount(){
    this.getClients();
  }

  populateTable (x) {
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
  }

  getClients = () =>{
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
      let json_data = JSON.stringify(json);
      let json_object = JSON.parse(json_data);
      this.populateTable(json_object);
    });
  };

  render(){
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
          </tbody>
        </table>
      </div>
    );
  }
}

export default (ClientData);
