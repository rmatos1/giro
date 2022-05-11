import listaClientes from "../../assets/data/listaClientes.json";

export const atualizaClientesExibidos = pagina => {
	return dispatch => {

		dispatch({ type: 'ATUALIZA_CARREGANDO', payload: true });

		let clientesExibidos = [];

		let inicio = 3 * (pagina - 1);

		for(let i = inicio; i < inicio + 3; i++) {

			if(listaClientes[i])
				clientesExibidos.push(listaClientes[i]);
		}
		
		dispatch({ 
			type: 'ATUALIZA_CLIENTES_EXIBIDOS', 
			payload: clientesExibidos 
		});
	}
}

export const atualizaPaginaAtual = pagina => {
	return {
		type: 'ATUALIZA_PAGINA_ATUAL',
		payload: parseInt(pagina)
	}
}

export const atualizaPaginaFinal = () => {
	return {
		type: 'ATUALIZA_PAGINA_FINAL',
		payload: Math.ceil(listaClientes.length/3)
	}
}