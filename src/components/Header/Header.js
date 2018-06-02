import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from 'logo.svg';
import { HeaderContact } from './HeaderContact';

const propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  location: PropTypes.string,
};

const defaultProps = {
  name: 'Name',
  role: 'Role',
  location: 'Location',
};

export class Header extends Component {
  render() {
    return (
      <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>{this.props.name}</h1>
        <p>{this.props.role} @{this.props.location}</p>
        <HeaderContact />
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
