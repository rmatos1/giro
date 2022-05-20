import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const ConteudoDrawer = props => {

	const [telaAtiva, setTelaAtiva] = useState("clientes");

	const acaoDrawer = (texto, destino) => {

		if(texto === "Sair") {

			props.navigation.reset({
				index: 0,
				routes: [{ name: "login" }]
			})

		} else {

			setTelaAtiva(destino)

			props.navigation.navigate(destino)
		}
	}

	const exibeLinks = item => {

		let ativo = false;

		if(telaAtiva === item.destino)
			ativo = true;

		return(
			<TouchableOpacity
				key={item.texto}
	  			style={styles.link}
				activeOpacity={.8}
				underlayColor="#ccc"
				onPress= {() => acaoDrawer(item.texto, item.destino)}
			>

				<Image source={ativo ? item.iconeAtivo : item.icone} style={styles.icone} />

				<Text style={[styles.textoLink, ativo && { fontWeight: 'bold', color: '#5B5775' }]}>{ item.texto }</Text>		

	        </TouchableOpacity>	
		)
	}

	const menuLinks = [
		{
			icone: require("../../../assets/images/icones/menu/clientes.png"),	
			iconeAtivo: require("../../../assets/images/icones/menu/clientes-ativo.png"),	
			texto: "Clientes",
			destino: "clientes"
		},
		{
			icone: require("../../../assets/images/icones/menu/engrenagem.png"),
			iconeAtivo: require("../../../assets/images/icones/menu/engrenagem-ativa.png"),
			texto: "Permissões",
			destino: "permissoes"
		},
		{
			icone: require("../../../assets/images/icones/menu/sair.png"),	
			texto: "Sair"
		}
	]

	return(
		<View style={{ padding: 15, alignItems: 'center' }}>
			
			<Image source={require("../../../assets/images/logo-giro.png")} style={styles.logo} />

			<View style={{ marginBottom: 25, alignItems: 'center' }}>

				<Text style={styles.nomeUsuario}>Emilia Silberg</Text>
				<Text style={styles.emailUsuario}>emiliasilberg@gmail.com</Text>

			</View>	

			<View style={{ padding: 20, width: '100%' }}>
				
				{
					menuLinks.map(item => exibeLinks(item))
				}

			</View>

		</View>
	)
}

ConteudoDrawer.propTypes = {
	navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
	logo: {
		height: 35,
		width: 111,
		marginVertical: 30
	},
	nomeUsuario: {
		fontSize: 17,
		fontWeight: 'bold',
		color: '#5B5774'
	},
	emailUsuario: {
		fontSize: 14,
		color: '#BaBaBa'
	},
	link: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		paddingVertical: 8,
		marginBottom: 8
	},
	icone: {
		width: 22,
		height: 22,
		marginRight: 15
	},
	textoLink: {
		color: '#B0AFBC',
		fontSize: 16
	}
})

export default ConteudoDrawer;