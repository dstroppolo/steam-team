import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css'
import './styles/App.css';
import './styles/UserSearch.css';

import ColumnsContainer from './containers/ColumnsContainer';
import UserSearch from './containers/UserSearch';


class App extends Component {
  render() {
    return (
        <div className="app">
          <ColumnsContainer />
        </div>

    );
  }
}

export default App;
