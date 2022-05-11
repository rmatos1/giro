export const atualizaPermissoes = ({ tipo, permissoes }) => {
	return {
		type: tipo,
		payload: permissoes
	}
}