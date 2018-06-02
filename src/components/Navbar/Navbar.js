/* eslint react/forbid-prop-types: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  routes: PropTypes.array,
};

const defaultProps = {
  routes: [],
};

export class Navbar extends Component {
  render() {
    const tabs = [];
    this.props.routes.forEach((route) => {
      tabs.push((
        <li key={route.section}>
          <a href={`#${route.section}`}>{route.title}</a>
        </li>
      ));
    });

    return (
      <nav id="nav">
        <ul>
          {tabs}
        </ul>
      </nav>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
