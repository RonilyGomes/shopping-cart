import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import Notification from '../components/Notification';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  Notification('error', 'Desculpe, ocorreu um erro inesperado.');

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export default function apolloClient() {
  return new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache()
  });
}
