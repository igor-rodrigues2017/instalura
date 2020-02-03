import React, {Component} from "react";
import {Route, Redirect} from 'react-router-dom';

export default class PrivateRoute extends Component {
	render() {
		return (
			<Route
				render={
					(props) => {
						return this.validToken() ? <this.props.component {...props}/> : <Redirect to={'/?msg="you need make login"'} />
					}
				}
			/>
		)
	}

	validToken() {
		return localStorage.getItem('auth-token') != null;
	}
}