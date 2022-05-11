import { emailValido } from "../utils";

export const atualizaEmailLogin = email => {
	return {
		type: 'ATUALIZA_EMAIL_LOGIN',
		payload: email
	}
}

export const atualizaSenhaLogin = senha => {
	return {
		type: 'ATUALIZA_SENHA_LOGIN',
		payload: senha
	}
}

export const atualizaVisibilidadeSenha = status => {
	return {
		type: 'ATUALIZA_SENHA_VISIVEL',
		payload: status
	}
}

export const atualizaAutenticando = status => {
	return {
		type: 'ATUALIZA_AUTENTICANDO', 
		payload: status 
	}
}

export const autenticacaoSocial = navigation => {
	return dispatch => {

		dispatch({ type: 'ATUALIZA_AUTENTICANDO', payload: true })

		setTimeout(() => {
			navigation.reset({ index: 0, routes: [{ name: 'clientes' }] });
		}, 2500)
	}
}

export const autenticacaoEmail = ({ email, senha, navigation }) => {
	return dispatch => {

		if(email !== '' && senha.length > 5) {

      		if(emailValido(email)) {

      			dispatch({ type: 'ATUALIZA_AUTENTICANDO', payload: true })

				setTimeout(() => {
					navigation.reset({ index: 0, routes: [{ name: 'clientes' }] });
				}, 2500)

      		} else {

      			dispatch({
					type: 'ATUALIZA_HOUVE_ERRO',
					payload: {
						houveErro: true,
						msg: "Por favor, informe um e-mail válido"
					}
				})
      		}

      	} else {

      		let texto = "Por favor, informe ";

			if(email === '')
		      	texto += "seu e-mail";

		    if(senha.length < 6) {

				if(email === '')
					texto += " e ";

				texto += "sua senha";
			}

			dispatch({
				type: 'ATUALIZA_HOUVE_ERRO',
				payload: {
					houveErro: true,
					msg: texto
				}
			})
      	}	
	}
}

export const resetaErro = () => {
	return {
		type: 'ATUALIZA_HOUVE_ERRO',
		payload: { houveErro: false, msg: '' }
	}
}