class InputField extends React.Component {

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
          <label for={this.props.name}>{this.props.label}</label>
          <input name={this.props.name} type={this.props.type} value={this.state.data} placeholder={this.props.placeholder}
                 onChange = {this.updateState} />
          <h4>{this.state.data}</h4>
        </div>
    );
  }
}

InputField.propTypes = {
  type: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string
};

InputField.defaultProps = {
  placeholder: ''
};

export default InputField;
