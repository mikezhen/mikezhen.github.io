import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    const tabs = [];
    this.props.routes.forEach((route) => {
      tabs.push(
        <li key={route.section}>
          <a href={`#${route.section}`}>{route.title}</a>
        </li>
      );
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
