import {List} from "immutable";

function alterFoto(state, fotoId, callBackUpdatePropertie) {
	const fotoOldState = state.find(foto => foto.id === fotoId);
	const fotoActualState = Object.assign({}, fotoOldState, callBackUpdatePropertie(fotoOldState));
	const fotoIndex = state.findIndex(foto => foto.id === fotoId);
	const actualList = state.set(fotoIndex, fotoActualState);
	return actualList;
}

export function timeline(state = new List(), action) {
	if (action.type === 'LISTAGEM') {
		return new List(action.fotos);
	}

	if (action.type === 'COMENTARIO') {
		return alterFoto(state, action.fotoId, fotoOldState => {
			const comentatiosAtualizados = fotoOldState.comentarios.concat(action.novoComentario);
			return {comentarios: comentatiosAtualizados};
		});
	}

	if (action.type === 'LIKE') {
		return alterFoto(state, action.fotoId, fotoOldState => {
			const likeada = !fotoOldState.likeada;
			const liker = action.liker;
			const possivelLiker = fotoOldState.likers.find(likerAtual => likerAtual.login === liker.login);

			let novosLikers;
			if(possivelLiker === undefined){
				novosLikers = fotoOldState.likers.concat(liker);
			} else {
				novosLikers = fotoOldState.likers.filter(likerAtual => likerAtual.login !== liker.login);
			}
			return {likeada, likers: novosLikers};
		});
	}

	return state;
}