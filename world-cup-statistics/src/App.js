import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BracketDetail from './components/containers/bracketdetail'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BracketDetail/>
      </div>
    );
  }
}

export default App;
