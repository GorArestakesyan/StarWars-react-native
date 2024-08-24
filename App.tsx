import {ApolloProvider} from '@apollo/client';
import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {AppNavigation} from './src/navigation/AppNavigation';
import client from './src/utils/services/apolloClient/appoloClient';

function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView collapsable style={styles.safeArea} />
      <ApolloProvider client={client}>
        <AppNavigation />
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: '#FF5349'},
});
