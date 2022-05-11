import { Modal, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { TEXTO, FUNDO_OPACO, PORTA_CORPO_MODAL, CORPO_MODAL } from '../../constants';

import { resetaErro } from "../../actions/authActions";

const ModalErro = () => {

	const { houveErro, msgErro } = useSelector(state => state.authReducer)

	const dispatch = useDispatch();

	return(
		<Modal
	        animationType="fade"
	        visible={houveErro}
	        transparent={true}
	        onRequestClose={() => dispatch(resetaErro())}
	    >

	    	<TouchableOpacity
	          style={FUNDO_OPACO}
	          onPress= {() => dispatch(resetaErro())}
	          underlayColor={'rgba(0,0,0,0.3)'}
	          activeOpacity={.75}
	        />

	    	<View style={PORTA_CORPO_MODAL}>

		        <View style={CORPO_MODAL}>
		            
		        	<Image source={require("../../../assets/images/houve-erro.png")} />

		            <Text style={[TEXTO, { margin: 15, textAlign: 'center' }]}>{ msgErro }</Text>

		            <TouchableOpacity
		            	style={styles.botaoFechar}
						activeOpacity={.8}
						underlayColor="#ee5e5e"
						onPress= {() => dispatch(resetaErro())}
					>
						<Text style={[TEXTO, { fontWeight: 'bold', marginRight: 10 }]}>X</Text>
						
						<Text style={[TEXTO, { fontWeight: 'bold' }]}>Fechar</Text>

			        </TouchableOpacity>

		        </View>

		    </View>    

	    </Modal>
	)
}

const styles = StyleSheet.create({
	botaoFechar: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 6,
		flexDirection: 'row',
		alignItems: 'center'
	}
})

export default ModalErro
