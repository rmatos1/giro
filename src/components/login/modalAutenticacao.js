import { Modal, View, Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { TITULO_TELA, FUNDO_OPACO, PORTA_CORPO_MODAL, CORPO_MODAL } from '../../constants';

const ModalAutenticacao = () => {

	const { autenticando } = useSelector(state => state.authReducer);

	return(
	    <Modal
		animationType="fade"
		visible={autenticando}
		transparent={true}
		onRequestClose={() => false}
	    >

		<View style={FUNDO_OPACO} />

		<View style={PORTA_CORPO_MODAL}>

			<View style={CORPO_MODAL}>

			    <Text style={[TITULO_TELA, { marginBottom: 15 }]}>Autenticando...</Text>

			    <ActivityIndicator size='large' color='#00DD3A' />

			</View>

		    </View>    

	    </Modal>
	)
}

export default ModalAutenticacao
