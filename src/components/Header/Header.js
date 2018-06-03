import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from 'logo.svg';
import { HeaderContact } from './HeaderContact';
import './Header.css';

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
        <p>{this.props.role} </p>
        <div className="location row">
          <i className="icon fa-map-marker" />
          <p>{this.props.location}</p>
        </div>
        <HeaderContact />
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
