import React, { Component } from 'react';
import './App.css';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import person from './data/intro';

class App extends Component {
  render() {
    return (
      <div id="wrapper" className="App">
        <Header person={person}/>
        <Body person={person}/>
        <Footer name={person.name}/>
      </div>
    );
  }
}

export default App;
