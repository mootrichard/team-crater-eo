import React, { Component } from 'react';
import {Field} from 'redux-form'

class ClientData extends Component {
  constructor(props){
    super(props)
    this.populateSelect = this.populateSelect.bind(this);
    this.getClients = this.getClients.bind(this);
    this.state = {
      clientData: {}
    }
  }

  componentDidMount(){
    this.getClients();
  }

  populateSelect (x){
    for (var index in x) {
      var node = document.createElement('option');
      node.text = x[index].first_name + ' ' + x[index].last_name;
      node.value = x[index].id;
      document.getElementById("clientselect").appendChild(node);
    }
  }

  getClients(){
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
      this.populateSelect(json_object);
    });
  }

  render(){
    return (
      <div>
        <Field name="clientselect" id="clientselect" component="select">
          <option></option>
        </Field>
      </div>
    );
  }
}

  export default (ClientData);
