import React, { Component } from 'react';
import PropTypes from 'prop-types';
import resume from 'assets/mikezhen.pdf';

const propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
  imgUrl: PropTypes.string,
};

const defaultProps = {
  title: 'Title',
  background: 'Description',
  imgUrl: '',
};

export class SectionIntro extends Component {
  constructor() {
    super();
    this.state = {
      hoverState: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      hoverState: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      hoverState: false,
    });
  }

  render() {
    return (
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>{this.props.title}</h2>
          </header>
          <p>{this.props.background}</p>
          <a
            download
            href={resume}
            className="button special"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            {this.state.hoverState ?
              <span className="icon fa-download" /> :
              'Get Resume'
            }
          </a>
        </div>
        <span className="image">
          <img src={this.props.imgUrl} alt="" />
        </span>
      </div>
    );
  }
}

SectionIntro.propTypes = propTypes;
SectionIntro.defaultProps = defaultProps;
