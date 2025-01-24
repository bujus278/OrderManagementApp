import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import './styles.css';
import CustomersDashboard from '../../features/customers/customersDashboard/CustomersDashboard';
import OrdersDashboard from '../../features/orders/ordersDashboard/OrdersDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../../features/home/HomePage';
import OrderPage from '../../features/orders/OrderPage';
import CustomerPage from '../../features/customers/CustomerPage';

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
            <Route path="Customers/:customerId" element={<CustomerPage />} />
            <Route path="Orders" element={<OrdersDashboard />} />
            <Route path="Orders/:orderId" element={<OrderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
