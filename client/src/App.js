import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import UserCard from './components/UserCard';


//apollo client setup
const client = new ApolloClient({
  uri: 'localhost:4000/api'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client = {client}>
        <div className="App">
          <h1>Henlo</h1>
          <UserCard />
        </div>
      </ApolloProvider>

    );
  }
}

export default App;
