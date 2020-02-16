import React, {Component} from "react";
import LogoutButton from "./LogoutButton";
import TimelineApi from "../logics/TimelineApi";
import {notifyError} from "../reducers/notify";

export default class Header extends Component {

	constructor() {
		super();
		this.state = {msg: ''};
	}

	componentDidMount() {
		this.props.store.subscribe(() => {
			this.setState({msg: this.props.store.getState().notifyError});
		})
	}

	search(event) {
		event.preventDefault();
		this.props.store.dispatch(TimelineApi.search(this.loginSearch.value))
	}

	render() {
		return (
			<header className="header container">
				<h1 className="header-logo">
					Instalura
				</h1>
				<LogoutButton />
				<form className="header-busca" onSubmit={this.search.bind(this)}>
					<input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo" ref={input => this.loginSearch = input}/>
					<input type="submit" value="Buscar" className="header-busca-submit"/>
				</form>
				<span>{this.state.msg}</span>
				<nav>
					<ul className="header-nav">
						<li className="header-nav-item">
							<a href="#">
								♡
								{/*                 ♥ */}
								{/* Quem deu like nas minhas fotos */}
							</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

