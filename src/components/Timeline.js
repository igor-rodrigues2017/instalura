import React, {Component} from "react";
import FotoItem from './FotoItem';

export default class Timeline extends Component {

	constructor(props) {
		super(props);
		this.state = {fotos: []};
		this.login = props.login;
	}

	componentDidMount() {
		this.loadPhotos();
	}

	componentDidUpdate(prevProps) {
		if (!this.login) {
			this.login = prevProps.login;
			this.loadPhotos();
		}
	}

	loadPhotos() {
		let url;
		if (!this.login) {
			url = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
		} else {
			url = `http://localhost:8080/api/public/fotos/${this.login}`;
		}

		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({fotos: data}));
	}

	render(){
		return (
			<div className="fotos container">
				{
					this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto}/>)
				}
			</div>
		);
	}
}