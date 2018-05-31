import React, { Component } from 'react';
import './App.css';
import { Header } from './Header';
import { Body } from './Body';

class App extends Component {
  render() {
    return (
      <div id="wrapper" className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
