export function notifyError(state = '', action) {
	if (action.type === 'NOTIFICACAO') {
		return action.msg;
	}

	return state;
}