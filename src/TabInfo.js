import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './ui-toolkit/css/nm-cx/main.css'
import { connect } from 'react-redux';
import { addItem } from './state/actions';

class TabInfo extends Component {
	constructor(props) {
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
		let current;
		if (!this.props.currentTab) { current = this.props.tabs[0]; }
		else { current = this.props.currentTab; }

		return (
			<div id="tabInfo" className="columns small-12 padding-vert-medium">
				<ul id="infoList">
	      	{current.items.map((item, idx) =>  (
		      	<li key={idx}>{item}</li>
	      	))}
				</ul>
				<div id="addItemForm" className="row">
					<input className="columns small-9" id="itemInput" placeholder="New item" onChange={this.handleChange} value={this.state.input}></input>
					<button className="columns small-3" id="itemButton" onClick={() => {this.props.addItem(this.state.input, current.id); this.clearInput();}}>Add item</button>
				</div>
			</div>
		);
	}
}

TabInfo.propTypes = {
	tabs: PropTypes.array.isRequired,
  currentTab: PropTypes.object,
  addItem: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return (
    {
      currentTab: state.currentTab,
      tabs: state.tabs
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return (
    {
			addItem: (text, id) => {
				dispatch(addItem(text, id));
			}
    }
  )
}

const ConnectedTabInfo = connect(mapStateToProps, mapDispatchToProps)(TabInfo);
export default ConnectedTabInfo;