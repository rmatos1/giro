const INITIAL_STATE = {
	carregandoDados: false,
	clientesExibidos: [],
	paginaAtual: 1,
	paginaFinal: 1
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {

		case 'ATUALIZA_CARREGANDO':
			return { ...state, carregandoDados: action.payload }	

		case 'ATUALIZA_CLIENTES_EXIBIDOS':
			return { 
				...state, 
				clientesExibidos: action.payload,
				carregandoDados: false 
			}	

		case 'ATUALIZA_PAGINA_ATUAL':
			return { ...state, paginaAtual: action.payload }	

		case 'ATUALIZA_PAGINA_FINAL':
			return { ...state, paginaFinal: action.payload }		

		default:
			return state
	}
}