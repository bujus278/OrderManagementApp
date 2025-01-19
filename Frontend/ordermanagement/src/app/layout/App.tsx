import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import './styles.css';
import CustomersDashboard from '../../features/customers/customersDashboard/CustomersDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../../features/home/HomePage';
import OrdersDashboard from '../../features/orders/OrdersDashboard';

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {}
  }),
  uri: process.env.REACT_APP_API_SCHEMA_URL
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="Customers" element={<CustomersDashboard />} />
            <Route path="Orders" element={<OrdersDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
