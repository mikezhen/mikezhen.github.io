import React, { Component } from 'react';
import PropTypes from 'prop-types';
import rocket from 'assets/img/rocket.png';
import './Footer.css';

const propTypes = {
  name: PropTypes.string,
};

const defaultProps = {
  name: 'Name',
};

export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="image">
          <img src={rocket} alt="" />
        </div>
        <p className="copyright">&copy;2018. {this.props.name}</p>
      </footer>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
