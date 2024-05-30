import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/pages/Store/store';
import Routes from './src/routes';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
