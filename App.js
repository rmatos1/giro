import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './src/routes';
import { store, persistor } from './src/redux/store';

const App = () => {

  return (
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>

      <StatusBar backgroundColor="#fff" style="dark" />

    </Provider>
  );
}

export default App;
