const INITIAL_STATE = {
	gerenciarIndicadores: {
		administrador: true,
		analista: true,
		vendedor: true
	},
	controlarAcesso: {
		administrador: true,
		analista: true,
		vendedor: true
	},
	visulizarIndicadoresFinanceiros: {
		administrador: true,
		analista: true,
		vendedor: true
	},
	gerenciarAtividades: {
		administrador: true,
		analista: true,
		vendedor: true
	}
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {

		case 'ATUALIZA_GERENCIAR_INDICADORES':
			return { ...state, gerenciarIndicadores: action.payload }

		case 'ATUALIZA_CONTROLAR_ACESSO':
			return { ...state, controlarAcesso: action.payload }
			
		case 'ATUALIZA_VISUALIZAR_INDICADORES_FINANCEIROS':
			return { ...state, visulizarIndicadoresFinanceiro: action.payload }
			
		case 'ATUALIZA_GERENCIAR_ATIVIDADES':
			return { ...state, gerenciarAtividades: action.payload }			

		default:
			return state;
	}
}