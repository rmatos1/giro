import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { atualizaPermissoes } from "../actions/permissaoActions"

const TogglePermissao = props => {

	const { perfil, dados, tipo } = props;

	const [valor, setValor] = useState(dados[perfil]);

	const dispatch = useDispatch();

	return(
		<View style={{ alignItems: 'center' }}>

	        <Text style={styles.tituloToggle}>{ perfil }</Text>

	        <Switch
	          trackColor={{ false: "#ccc", true: "#15A500" }}
	          thumbColor='#fff'
	          ios_backgroundColor="#ccc"
	          onValueChange={() => {

	          	setValor(!valor);

	          	dados[perfil] = !valor;

	          	dispatch(atualizaPermissoes({ tipo, permissoes: dados }))
	          }}
	          value={valor}
	        />

	     </View>
	)
}

TogglePermissao.propTypes = {
	perfil: PropTypes.string.isRequired, 
	dados: PropTypes.object.isRequired, 
	tipo: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
	tituloToggle: {
		fontSize: 14, 
		color: '#5C6982',
		textTransform: 'capitalize',
	}
})

export default TogglePermissao
