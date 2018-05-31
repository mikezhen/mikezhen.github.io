import React, { Component } from 'react';
import logo from '../logo.svg';
import { HeaderContact } from './HeaderContact';
import person from '../data/intro.json';

export class Header extends Component {
  render() {
    return (
      <header id="header" className="alt">
        <span className="logo"><img src={ logo } alt="" /></span>
        <h1>{person.name}</h1>
        <p>{person.role} @{person.location}</p>
        <HeaderContact />
      </header>
    );
  }
}
