import React, { useRef, useState, useEffect } from "react";
import { ScrollView, View, Text, TextInput, Image, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import BotaoLogin from "../../components/login/botaoLogin";
import VisibilidadeSenha from "../../components/login/visibilidadeSenha";
import ModalAutenticacao from "../../components/login/modalAutenticacao";
import ModalErro from "../../components/login/modalErro";

import { TEXTO } from '../../constants';
import { atualizaEmailLogin, atualizaSenhaLogin, resetaErro } from '../../actions/authActions';

const Login = () => {

	const { emailLogin, senhaLogin, senhaVisivel } = useSelector(state => state.authReducer)

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(resetaErro())
	}, [])

	const campoSenha = useRef(null);

	return(
		<SafeAreaView style={{ backgroundColor: '#fff', flexGrow: 1 }}>

			<ModalAutenticacao />
			<ModalErro />

			<ScrollView contentContainerStyle={styles.container}>

				<View style={{ marginTop: 15 }}>
					<Image source={require('../../../assets/images/logo-giro.png')} />
				</View>

				<Text style={styles.titulo}>Faça seu login</Text>

				<View style={styles.portaCampo}>
				
					<Text style={[TEXTO, styles.label]}>E-mail</Text>

					<TextInput
						value={emailLogin}
						style={styles.input}
						autoCapitalize={'none'}
						placeholder='Digite seu e-mail'
						placeholderTextColor="#c5c5c5"
						keyboardType={'email-address'}
						autoCorrect={false}
						onChangeText={texto => dispatch(atualizaEmailLogin(texto.trim()))}
						onSubmitEditing={() => campoSenha.current.focus()}
					/>

					<Image source={require('../../../assets/images/icones/login/email.png')} style={styles.iconeInput} />

				</View>

				<View style={styles.portaCampo}>
				
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

						<Text style={[TEXTO, styles.label]}>Senha</Text>

						<Text style={styles.esqueciSenha}>Esqueci minha senha</Text>

					</View>	

					<TextInput
						ref={campoSenha}
						value={senhaLogin}
						secureTextEntry={senhaVisivel}
						style={styles.input}
						maxLength={15}
						placeholder='Digite sua senha'
						placeholderTextColor="#c5c5c5"
						autoCapitalize={'none'}
						autoCorrect={false}
						onChangeText={texto => dispatch(atualizaSenhaLogin(texto))}
					/>

					<Image source={require('../../../assets/images/icones/login/cadeado.png')} style={styles.iconeInput} />

					<VisibilidadeSenha top={33} right={8} />

				</View>

				<View style={styles.portaCampo}>

					<BotaoLogin 
						cor='#00DD3A'
						texto='Entrar'
						acessoSocial={false}
					/>

				</View>	

				<Text style={TEXTO}>ou</Text>

				<View style={{ width: '100%', marginVertical: 15 }}>

					<BotaoLogin 
						cor='#0032CC'
						texto='Continuar com o Facebook'
						icone={require('../../../assets/images/icones/login/icone-facebook.png')}
						acessoSocial={true}
					/>

					<BotaoLogin 
						cor='#1DA1F2'
						texto='Continuar com o Twitter'
						icone={require('../../../assets/images/icones/login/icone-twitter.png')}
						acessoSocial={true}
					/>

				</View>	

				<Text style={[TEXTO, { textAlign: 'center', lineHeight: 20, marginBottom: 10 }]}>Ainda não possui cadastro?{"\n"}<Text style={{ color: '#00DD3A', textDecorationLine: 'underline' }}>Crie sua conta aqui</Text></Text>

			</ScrollView>

		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		 width: '100%', 
		 flexGrow: 1, 
		 padding: 15, 
		 alignItems: 'center'
	},
	titulo: {
		color: '#74708C',
		fontWeight: 'bold',
		fontSize: 22,
		marginTop: 40,
		marginBottom: 20
	},
	portaCampo: {
		marginTop: 25,
		width: '100%',
		position: 'relative'
	},
	label: {
		fontWeight: 'bold',
		marginLeft: 10,
		fontSize: 14
	},
	input: {
		borderRadius: 6,
		width: '100%',
		marginTop: 3,
		height: 48,
		borderWidth: 1,
		borderColor: '#ddd',
		fontSize: 16,
		color: '#686868',
		paddingLeft: 35
	},
	iconeInput: {
		position: 'absolute',
		top: 36,
		left: 10,
		width: 20,
		height: 20
	},
	esqueciSenha: { 
		textDecorationLine: 'underline', 
		fontWeight: 'bold', 
		fontSize: 14, 
		color: '#868686',
		paddingRight: 5
	}
})

export default Login
