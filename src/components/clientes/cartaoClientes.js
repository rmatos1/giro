import { View, Text, Image, TouchableHighlight, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { CARTAO } from "../../constants";

const CartaoCliente = props => {

	const icones = [
		require('../../../assets/images/icones/clientes/ver.png'),
		require('../../../assets/images/icones/clientes/editar.png'),
		require('../../../assets/images/icones/clientes/deletar.png'),
	]

	const exibeInfo = info => {

		let titulo = info;

		if(info === "dataInclusao") titulo = "Data Inclusão";

		return(
			<View style={{ marginBottom: 20 }}>
				
				<Text style={styles.titulo}>{ titulo }</Text>
				<Text style={styles.conteudo}>{ props.dados[info] }</Text>

			</View>
		)		
	}

	return(
		<View style={[CARTAO, { position: 'relative', padding: 15, paddingBottom: 5 }]}>
			
			<View style={styles.portaIcones}>
				
				{
					icones.map((item, i) => {

						return(
							<TouchableHighlight
								key={props.dados.nome + props.dados.dataInclusao + i}
								activeOpacity={.5}
								underlayColor="#fff"
								onPress= {() => false}
							>
								<Image source={item} style={styles.icone} />
							</TouchableHighlight>
						)
					})
				}

			</View>

			{ exibeInfo("nome") }
			{ exibeInfo("franquia") }
			{ exibeInfo("cidade") }
			{ exibeInfo("dataInclusao") }
			{ exibeInfo("plano") }

		</View>
	)
}

CartaoCliente.propTypes = {
	dados: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
	portaIcones: {
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 120,
		right: 15,
		top: 10
	},
	icone: {
		width: 20,
		height: 20,
		opacity: .9
	},
	titulo: {
		color: '#8F8F93',
		fontSize: 14,
		textTransform: "capitalize"
	},
	conteudo: {
		color: '#5C596D',
		fontSize: 16,
		fontWeight: 'bold'
	}
})

export default CartaoCliente;