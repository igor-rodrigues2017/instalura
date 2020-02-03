import {Component} from "react";

export default class Logout extends Component {

	componentDidMount() {
		localStorage.removeItem('auth-token');
		this.props.history.push('/');
	}

	render() {
		return null;
	}
}