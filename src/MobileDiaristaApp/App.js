import React from 'react';
import { View, StyleSheet, Platform, StatusBar as RNStatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <RNStatusBar barStyle="light-content" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: Platform.OS === 'ios' ? 50 : 54,
    backgroundColor: '#32CD32',
  },
});
