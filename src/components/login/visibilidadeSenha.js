import { Image, TouchableHighlight } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { atualizaVisibilidadeSenha } from "../../actions/authActions";

const VisibilidadeSenha = props => {

	const { top, right } = props;

	const { senhaVisivel } = useSelector(state => state.authReducer);

	const dispatch = useDispatch();

	return(
		<TouchableHighlight
			style={{ position: 'absolute', top, right }}
			activeOpacity={.5}
			underlayColor="#fff"
			onPress= {() => dispatch(atualizaVisibilidadeSenha(!senhaVisivel))}
		>
			<Image 
				source={senhaVisivel ? 
					require('../../../assets/images/icones/login/senha-visivel.png') : 
					require('../../../assets/images/icones/login/senha-nao-visivel.png')
				} 
			/>

        </TouchableHighlight>
	)
}

VisibilidadeSenha.propTypes = {
	top: PropTypes.number.isRequired,
	right: PropTypes.number.isRequired
}

export default VisibilidadeSenha
