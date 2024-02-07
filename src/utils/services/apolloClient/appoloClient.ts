import {ApolloClient, InMemoryCache} from '@apollo/client';
import {APOLLO_CLIENT_URL} from '../../constants';

const client = new ApolloClient({
  uri: APOLLO_CLIENT_URL,
  cache: new InMemoryCache(),
});

export default client;
