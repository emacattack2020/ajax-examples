import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Name from './components/name/Name';
import TextArea from './components/textarea/TextArea';

import Users from './components/users/Users';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Name />
          <TextArea />
        </div>
        <div>
          <Users/>
        </div>
      </div>
    );
  }
}

export default App;
