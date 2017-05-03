import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: '',
    };

    this.updateState = this.updateState.bind(this);

  };

  updateState(e) {
    this.setState({data: e.target.value});
  }

  render() {
    return (
        <div>
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <input name={this.props.name} type={this.props.type} value={this.state.data} placeholder={this.props.placeholder}
            onChange={this.updateState} />
        </div>
    );
  }
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

InputField.defaultProps = {
  placeholder: ''
};

export default InputField;
