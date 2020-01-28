import React, {Component} from "react";

export default class Login extends Component {
	constructor() {
		super();
		this.state = {errorMsg: ''};
	}

	sendLogin(event) {
		event.preventDefault();
		fetch('http://localhost:8080/api/public/login', {
			headers: {
				'content-type': 'application/json'
			},
			method: 'Post',
			body: JSON.stringify({login: this.login.value, senha: this.password.value})
		}).then(response => {
			if (!response.ok) {
				throw new Error('login or password invalid')
			} else {
				return response.text();
			}
		}).then(token => {
			localStorage.setItem('auth-token', token);
			this.props.history.push('/timeline') // https://dev.to/projectescape/programmatic-navigation-in-react-3p1l
		})
			.catch(error => this.setState({errorMsg:error.message}))
	}

	render() {
		return(
			<div className="login-box">
				<h1 className="header-logo">Instalura</h1>
				<span>{this.state.errorMsg}</span>
				<form onSubmit={this.sendLogin.bind(this)}>
					<input type="text" ref={input => this.login = input} />
					<input type="password" ref={input => this.password = input} />
					<input type="submit" value="login" />
				</form>
			</div>
		);
	}
}