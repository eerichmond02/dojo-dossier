import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './ui-toolkit/css/nm-cx/main.css' /* Need to copy this */
import { addTab } from './state/actions'
import { connect } from 'react-redux';

class Form extends Component {
	constructor(props){
		super(props);
		this.state = {
			input: ''
		}
		this.handleChange =  this.handleChange.bind(this);
		this.clearInput = this.clearInput.bind(this);
	}

	handleChange({target}) {
		this.setState({input: target.value})
	}

	clearInput() {
		this.setState({input: ''});
	}

	render() {
		return (
      <div id="formDiv" className="columns small-12">
        <input id="titleInput" placeholder="Title" value={this.state.input} onChange={this.handleChange}></input>
        <button id="newButton" onClick={() => {this.props.addTab(this.state.input); this.clearInput();}}>Add New tab</button>
      </div>
		);
	}
}

Form.propTypes = {
  addTab: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return (
    {
			addTab: name => {
				dispatch(addTab(name));
			},
    }
  )
}

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form);
export default ConnectedForm;      


