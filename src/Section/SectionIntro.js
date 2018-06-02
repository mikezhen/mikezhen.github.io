import React, { Component } from 'react';

export class SectionIntro extends Component {
  constructor() {
    super();
    this.state = {
      hoverState: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      hoverState: true
    });
  }

  handleMouseLeave() {
    this.setState({
      hoverState: false
    });
  }

  render() {
    return (
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>{this.props.title}</h2>
          </header>
          <p>{this.props.person.background}</p>
          <a download href={this.props.person.resumeUrl} className="button special"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            {this.state.hoverState ?
              <span className="icon fa-download" /> :
              'Get Resume'
            }
          </a>
        </div>
        <span className="image">
          <img src={this.props.person.imgUrl} alt="" />
        </span>
      </div>
    );
  }
}
