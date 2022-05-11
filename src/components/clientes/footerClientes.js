import { View, Text, TouchableHighlight, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import { atualizaPaginaAtual } from "../../actions/clientesActions";

import { TEXTO } from "../../constants";

const FooterClientes = () => {

	const { paginaAtual, paginaFinal } = useSelector(state => state.clientesReducer);

	const dispatch = useDispatch();

	const exibeNovaPagina = pagina => {

		if(pagina < 1) 
			pagina = 1;

		if(pagina > paginaFinal) 
			pagina = paginaFinal;

		dispatch(atualizaPaginaAtual(pagina))
	}

	const exibeBotao = (icone, iconeInvertido, pagina) => {

		let graus = '0deg';

		if(iconeInvertido)
			graus = '180deg';

		return(
			<TouchableHighlight
				activeOpacity={.5}
				underlayColor="#fff"
				onPress= {() => exibeNovaPagina(pagina)}
			>
				<Image 
					source={icone} 
					style={[styles.botao, { transform: [{ rotateY: graus }] }]} 
				/>

			</TouchableHighlight>
		)
	}    

	const chevronSimples = require('../../../assets/images/icones/clientes/chevron-simples.png'),
	      chevronDuplo = require('../../../assets/images/icones/clientes/chevron-duplo.png');		

	return(
		<View style={styles.footer}>

			<View style={styles.portaBotoes}>
				
				{ exibeBotao(chevronDuplo, true, 1) }
				{ exibeBotao(chevronSimples, true, paginaAtual - 1) }

			</View>

			<View style={[styles.portaBotoes, { width: 140 }]}>

				<Text style={TEXTO}>{paginaAtual}</Text>
				<Text style={TEXTO}>de</Text>
				<Text style={TEXTO}>{ paginaFinal }</Text>

			</View>

			<View style={styles.portaBotoes}>
				
				{ exibeBotao(chevronSimples, false, paginaAtual + 1) }
				{ exibeBotao(chevronDuplo, false, paginaFinal) }

			</View>

		</View> 
	)
}

const styles = StyleSheet.create({
	footer: { 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center'
	},
	portaBotoes: { 
		flexDirection: 'row', 
		width: 70, 
		justifyContent: 'space-evenly' 
	},
	botao: {
		width: 32,
		height: 32
	},
	input: {
		borderRadius: 3,
		width: 40,
		height: 28,
		borderWidth: 1,
		borderColor: '#ddd',
		fontSize: 13,
		color: '#686868',
		backgroundColor: '#fff',
		textAlign: 'center'
	},
})

export default FooterClientes
