import { View, Text, TouchableHighlight, Image, StyleSheet } from "react-native";

import { TITULO_TELA } from "../../constants";

const HeaderClientes = () => {

	const exibeBotao = (icone, id) => {

		return(
			<TouchableHighlight
				key={id}
				style={styles.botao}
				activeOpacity={.5}
				underlayColor="#fff"
				onPress= {() => false}
			>
				<Image source={icone} style={styles.icone} />
			</TouchableHighlight>
		)
	}

	const icones = [
		require('../../../assets/images/icones/clientes/lupa.png'),
		require('../../../assets/images/icones/clientes/filtro.png'),
		require('../../../assets/images/icones/clientes/calendario.png'),
		require('../../../assets/images/icones/clientes/adicao.png')
	]

	return(
		<View style={styles.header}>
					
			<Text style={TITULO_TELA}>Clientes</Text>

			<View style={styles.portaBotoes}>
				
				{
					icones.map((item, i) => {

						let key = `iconeBotao${i}`;

						return exibeBotao(item, key);
					})
				}

			</View>

		</View> 
	)
}

const styles = StyleSheet.create({
	header: { 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center',
		marginBottom: 30 
	},
	portaBotoes: { 
		flexDirection: 'row', 
		width: 170, 
		justifyContent: 'space-between' 
	},
	botao: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 4,
		borderRadius: 5,
		width: 35,
		height: 30
	},
	icone: {
		width: 20,
		height: 20
	}
})

export default HeaderClientes;