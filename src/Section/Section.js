import React, { Component } from 'react';
import './Section.css';

export class Section extends Component {
  render() {
    return this.props.section === 'intro' ?
    (
      <section id={this.props.section} className="main">
        {React.Children.map(this.props.children, (child) => {
          return child ? React.cloneElement(child, {...this.props}) : child;
        })}
      </section>
    ) :
    (
      <section id={this.props.section} className="main special">
        <header className="major">
          <h2>{this.props.title}</h2>
        </header>
        {this.props.children}
      </section>
    );
  }
}
