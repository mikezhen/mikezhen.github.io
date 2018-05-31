import React, { Component } from 'react';

export class Section extends Component {
  render() {
    return (
      <section id={this.props.section} className={`main ${this.props.section === "intro" ? '' : 'special'}`}>
        <header className="major">
          <h2>{this.props.title}</h2>
        </header>
        {this.props.children}
      </section>
    );
  }
}
