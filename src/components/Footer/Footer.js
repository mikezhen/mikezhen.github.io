import React, { Component } from 'react';
import ScrollUp from 'react-scroll-up';
import rocket from 'assets/img/rocket.png';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <ScrollUp showUnder={2200}>
          <img id="scroll-image" src={rocket} alt="" />
        </ScrollUp>
        <p className="copyright">Beam me up!</p>
      </footer>
    );
  }
}
