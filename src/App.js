import React, { Component } from 'react';
import 'App.css';
import { Header } from 'components/Header';
import { Body } from 'components/Body';
import { Footer } from 'components/Footer';
import person from 'data/intro.json';

class App extends Component {
  render() {
    return (
      <div id="wrapper" className="App">
        <Header
          name={person.name}
          role={person.role}
          location={person.location}
        />
        <Body
          background={person.background}
          imgUrl={person.imgUrl}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
