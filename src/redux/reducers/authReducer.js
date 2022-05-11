const INITIAL_STATE = {
	emailLogin: '',
	senhaLogin: '',
	senhaVisivel: true,
	autenticando: false,
	houveErro: false,
	msgErro: ''
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {

		case 'ATUALIZA_EMAIL_LOGIN':
			return { ...state, emailLogin: action.payload }

		case 'ATUALIZA_SENHA_LOGIN':
			return { ...state, senhaLogin: action.payload }

		case 'ATUALIZA_SENHA_VISIVEL':
			return { ...state, senhaVisivel: action.payload }		

		case 'ATUALIZA_AUTENTICANDO':
			return { ...state, autenticando: action.payload }	

		case 'ATUALIZA_HOUVE_ERRO':
			return {
				...state,
				houveErro: action.payload["houveErro"],
				msgErro: action.payload["msg"]
			}	

		default:
			return state
	}
}
