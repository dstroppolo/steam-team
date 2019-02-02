import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getUserQuery = gql``;

class UserCard extends Component {
  render() {
    return (
      <div style={{border:"2px solid black"}}>
        Hello
      </div>

    );
  }
}

export default graphql(getUserQuery)(UserCard);