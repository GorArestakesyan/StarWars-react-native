import {ApolloProvider} from '@apollo/client';
import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {AppNavigation} from './src/navigation/AppNavigation';
import client from './src/utils/services/apolloClient/appoloClient';

function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView collapsable style={{backgroundColor: '#FF5349'}} />
      <ApolloProvider client={client}>
        <AppNavigation />
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
