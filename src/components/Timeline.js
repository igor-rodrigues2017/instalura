import React, {Component} from "react";
import FotoItem from './FotoItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Timeline extends Component {

	constructor(props) {
		super(props);
		this.state = {fotos: []};
		this.login = props.login;
	}

	componentWillMount() {
		this.props.store.subscribe(fotos => {
			this.setState({fotos});
		});
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

		this.props.store.lista(url);
	}

	like(fotoId) {
		this.props.store.like(fotoId);
	}

	comment(fotoId,textoComentario) {
		this.props.store.comenta(fotoId, textoComentario);
	}

	render(){
		return (
			<div className="fotos container">
				<ReactCSSTransitionGroup
					transitionName="timeline"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					{
						this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} like={this.like.bind(this)} comment={this.comment.bind(this)}/>)
					}
				</ReactCSSTransitionGroup>

			</div>
		);
	}
}