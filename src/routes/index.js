import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../views/login';
import Permissoes from '../views/permissoes';
import Clientes from '../views/clientes';

import BarraTopo from '../components/drawer/barraTopo';
import ConteudoDrawer from '../components/drawer/conteudoDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Routes = () => {

	return(
		<NavigationContainer>

			<Drawer.Navigator
				screenOptions={{
				    header: ({ navigation }) => <BarraTopo navigation={navigation} />
				}}
				drawerContent={({ navigation }) => <ConteudoDrawer navigation={navigation} />}
			>

				<Stack.Screen name="login" component={Login} options={{ headerShown: false }} />

		    	<Drawer.Screen name="clientes" component={Clientes} />

		    	<Drawer.Screen name="permissoes" component={Permissoes} />

			</Drawer.Navigator>

		</NavigationContainer>
	)
}

export default Routes;