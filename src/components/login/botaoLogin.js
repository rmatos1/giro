import { View, TouchableHighlight, Text, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useNavigation } from '@react-navigation/native';

import { autenticacaoSocial, autenticacaoEmail } from "../../actions/authActions";

const BotaoLogin = props => {

	const navigation = useNavigation();

	const exibeIcone = () => {

		if(props.icone)
			return(<Image source={props.icone} style={styles.icone} />)

		return null;
	}

	const conteudoBotao = () => {

		return(
			<View style={[ styles.botao, { backgroundColor: props.cor } ]}>

				{ exibeIcone() }

				<Text style={styles.textoBotao}>{ props.texto }</Text>

			</View>
		)
	}

	const { emailLogin, senhaLogin } = useSelector(state => state.authReducer);

	const dispatch = useDispatch();

	return(
		<TouchableHighlight
			activeOpacity={.5}
			underlayColor="#fff"
			onPress= {() => {

				if(props.acessoSocial) 
					dispatch(autenticacaoSocial(navigation));	
				else 
					dispatch(autenticacaoEmail({ 
						email: emailLogin, 
						senha: senhaLogin, 
						navigation 
					}))
			}}
		>
			{ conteudoBotao() }
        </TouchableHighlight>
	)
} 

BotaoLogin.propTypes = {
	cor: PropTypes.string.isRequired,
	texto: PropTypes.string.isRequired,
	acessoSocial: PropTypes.bool
}

const styles = StyleSheet.create({
	botao: {
		height: 48,
		borderRadius: 6,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		elevation: 2
	},
	icone: {
		width: 24,
		height: 24,
		marginRight: 4
	},
	textoBotao: {
		color: '#fff',
		fontSize: 16
	}
})

export default BotaoLogin
