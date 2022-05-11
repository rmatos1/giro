import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

const BarraTopo = props => {

	return(
	  	<View style={styles.barraTopo}>

	  		<TouchableHighlight
	  			style={{ position: 'absolute', left: 15, bottom: 8 }}
				activeOpacity={.5}
				underlayColor="#fff"
				onPress= {() => props.navigation.openDrawer()}
			>
				<Image source={require("../../../assets/images/icones/menu.png")} style={styles.menu} />
	        </TouchableHighlight>	

	        <View style={{ flex: 1, alignItems: 'center' }}>
	  			<Image source={require("../../../assets/images/logo-giro.png")} style={styles.logo} />
	  		</View>			

	  	</View>
	)
}

BarraTopo.propTypes = {
	navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
	barraTopo: {
		marginTop: 20,
		height: 60, 
		paddingHorizontal: 15,
		backgroundColor: "#fff",
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
		position: 'relative'
	},
	menu: {
		height: 32,
		width: 32
	},
	logo: {
		height: 35,
		width: 111,
		marginBottom: 10
	}
})

export default BarraTopo;