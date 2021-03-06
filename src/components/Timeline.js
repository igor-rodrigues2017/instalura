import React, {Component} from "react";
import FotoItem from './FotoItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TimelineApi from "../logics/TimelineApi";
import {connect} from "react-redux";
import {timeline} from "../reducers/timeline";

class Timeline extends Component {

	constructor(props) {
		super(props);
		this.login = props.login;
	}

	componentDidMount() {
		this.loadPhotos();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.login !== this.login) {
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
		this.props.lista(url);
	}

	render() {
		console.log('render')
		return (
			<div className="fotos container">
				<ReactCSSTransitionGroup
					transitionName="timeline"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					{
						this.props.fotos.map(foto => <FotoItem key={foto.id} foto={foto} like={this.props.like}
						                                       comment={this.props.comenta}/>)
					}
				</ReactCSSTransitionGroup>

			</div>
		);
	}

}

const mapStateToProps = state => {
	return {fotos : state.timeline}
}

const mapDispatchToProps = dispatch => {
	return {
		like: (fotoId) => {
			dispatch(TimelineApi.like(fotoId));
		},
		comenta: (fotoId, textoComentario) => {
			dispatch(TimelineApi.comenta(fotoId, textoComentario))
		},
		lista: (urlPerfil) => {
			dispatch(TimelineApi.lista(urlPerfil));
		}

	}
}

const TimelineContainer = connect(mapStateToProps, mapDispatchToProps)(Timeline);

export default TimelineContainer
