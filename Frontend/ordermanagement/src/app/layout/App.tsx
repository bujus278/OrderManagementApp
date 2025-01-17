import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import './styles.css';
import CustomersDashboard from '../../features/customers/customersDashboard/CustomersDashboard';

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {}
  }),
  uri: "http://localhost:5073/graphql/"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <CustomersDashboard />
    </ApolloProvider>
  );
}

export default App;
