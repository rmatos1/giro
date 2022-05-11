import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { CONTAINER_TELA } from "../../constants";

import HeaderClientes from "../../components/clientes/headerClientes";
import FooterClientes from "../../components/clientes/footerClientes";
import CartaoClientes from "../../components/clientes/cartaoClientes";

import { atualizaClientesExibidos, atualizaPaginaFinal } from "../../actions/clientesActions";
import { atualizaAutenticando } from "../../actions/authActions";

const Clientes = () => {

	const { autenticando } = useSelector(state => state.authReducer)

	const { clientesExibidos, paginaAtual, paginaFinal } = useSelector(state => state.clientesReducer);

	const dispatch = useDispatch();

	useEffect(() => {

		dispatch(atualizaPaginaFinal());

		if(autenticando)
			dispatch(atualizaAutenticando(false));
	}, [])

	useEffect(() => {
		dispatch(atualizaClientesExibidos(paginaAtual))
	}, [paginaAtual])

	return(
		<SafeAreaView style={{ backgroundColor: '#F9F8FA', flexGrow: 1 }}>

			<FlatList
	          contentContainerStyle={CONTAINER_TELA}
	          renderItem={ ({item}) => <CartaoClientes dados={item} /> }
	          data={clientesExibidos}
	          keyExtractor={(item, index) => item + index}
	          ListHeaderComponent={() => <HeaderClientes />}
	          ListFooterComponent={() => <FooterClientes />}
	        />   

	    </SafeAreaView>    
	)
}

const styles = StyleSheet.create({
	cartaoCliente: {
		backgroundColor: '#fff', 
		borderRadius: 10, 
		elevation: 3,
		marginBottom: 25,
		width: '100%'
	}
})

export default Clientes
