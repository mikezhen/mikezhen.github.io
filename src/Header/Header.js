import React, { Component } from 'react';
import logo from '../logo.svg';
import { HeaderContact } from './HeaderContact';

export class Header extends Component {
  render() {
    return (
      <header id="header" className="alt">
        <span className="logo"><img src={ logo } alt="" /></span>
        <h1>{this.props.person.name}</h1>
        <p>{this.props.person.role} @{this.props.person.location}</p>
        <HeaderContact />
      </header>
    );
  }
}
