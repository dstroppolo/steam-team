import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloProvider } from 'react-apollo';

import ApolloClient from 'apollo-boost';

//apollo client setup
const client = new ApolloClient({
    uri: '/api'
  });
  

ReactDOM.render(
    
    <ApolloProvider client = {client}>
        <App />
    </ApolloProvider>

, document.getElementById('root'));