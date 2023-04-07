/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Toast from 'react-native-toast-message';
import { RootNavigator } from './src/navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { toastConfig } from './src/components/toast';

const App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
      <Toast />
      {/* <Toast config={toastConfig} /> */}
    </Provider>
  );
};


export default App;
