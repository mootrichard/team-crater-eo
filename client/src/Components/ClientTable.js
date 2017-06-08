import React, { Component } from 'react';
import createResume from './ResumeGenerator';
const moment = require('moment');

const getResume = (id) =>{
  fetch(`/api/clients/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+localStorage.getItem("token")
    },
    method: 'GET'
  })
  .then((response) => response.json())
  .then((responseJson) => {
    createResume(JSON.stringify(responseJson));
  });
};

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
    let arr = JSON.parse(x);
    for (var index in arr) {
      let row = document.createElement('tr');
      let reg_date = document.createElement('td');
      let first_name = document.createElement('td');
      let last_name = document.createElement('td');
      let dob = document.createElement('td');
      let resume = document.createElement('td');
      let reg_date_moment = moment(arr[index].registration_date);
      reg_date.innerHTML = reg_date_moment.format('MM/DD/YY');
      first_name.innerHTML = arr[index].first_name;
      last_name.innerHTML = arr[index].last_name;
      let dob_moment = moment(arr[index].dob);
      dob.innerHTML = dob_moment.format('MM/DD/YY');
      row.appendChild(reg_date);
      row.appendChild(first_name);
      row.appendChild(last_name);
      row.appendChild(dob);
      row.appendChild(resume);
      row.setAttribute('data-json', JSON.stringify(arr[index]));
      row.setAttribute('data-id', arr[index].id);
      row.onclick = function() {
        console.log(this.getAttribute('data-id'));
        //console.log(this.getAttribute('data-json'));
        //createResume(this.getAttribute('data-json'));
        getResume(this.getAttribute('data-id'));
      };
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
    .then((response) => response.json())
    .then((responseJson) => {
      this.populateTable(JSON.stringify(responseJson));
    });
  };

  render(){
    return (
      <div className="clients-table">
        <table>
          <thead>
            <tr>
              <th>Reg. Date</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Resume</th>
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
