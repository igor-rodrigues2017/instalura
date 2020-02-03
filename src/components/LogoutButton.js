import React, {Component} from "react";
import {Redirect} from "react-router-dom";

export default class LogoutButton extends Component {

	constructor() {
		super();
		this.state = {navigate: false};
	}

	render() {
		if(this.state.navigate) {
			return (<Redirect to={'/logout'} />);
		}
		return (<button onClick={this.logout.bind(this)}>Logout</button>);
	}

	logout() {
		this.setState({navigate: true});
	}
}