import React from 'react';
import { PropTypes } from 'prop-types';
import './ui-toolkit/css/nm-cx/main.css' /* Need to copy this */
import TabInfo from './TabInfo'
import { connect } from 'react-redux';
import { switchTab } from './state/actions'

const Tabs = (props) => {
	return (
		<div className="heading-nav padding-bottom-medium">
			<ul className="tabs">
      	{ props.tabs.length > 0 ?
      		props.tabs.map((tab, idx) => {
      		let classes = "tab-title";
      		if (!props.currentTab) {
      			if (idx === 0) { classes = classes.concat(" active"); }
      		} else {
      			if (tab.id === props.currentTab.id) { classes = classes.concat(" active"); }
      		}
      		return (
	      		<li key={tab.id} className={classes}>
	      			<button className="tabButton "onClick={() => { props.switchTab(tab.id); }}>{tab.name}</button>
      			</li>
      		);
      	}) :
    			<li className="tab-title">
    				<button className="tabButton ">Add a new tab</button>
    			</li>
      	}
			</ul>
			<TabInfo />
		</div>
	); 
}

Tabs.propTypes = {
  currentTab: PropTypes.object,
  tabs: PropTypes.array.isRequired,
  switchTab: PropTypes.func.isRequired 
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
			switchTab: id => {
				dispatch(switchTab(id));
			},
    }
  )
}

const ConnectedTabs = connect(mapStateToProps, mapDispatchToProps)(Tabs);
export default ConnectedTabs;