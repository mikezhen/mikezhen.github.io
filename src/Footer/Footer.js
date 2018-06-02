import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <p className="copyright">&copy;2018. {this.props.name}</p>
      </footer>
    );
  }
}
