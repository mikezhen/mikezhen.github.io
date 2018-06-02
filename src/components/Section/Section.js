import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const propTypes = {
  section: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element,
};

const defaultProps = {
  section: '',
  title: 'Title',
  children: <React.Fragment />,
};

export class Section extends Component {
  render() {
    return this.props.section === 'intro' ?
      (
        <section id={this.props.section} className="main">
          {React.Children.map(this.props.children, (child) => {
            return child ? React.cloneElement(child, { ...this.props }) : child;
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

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
