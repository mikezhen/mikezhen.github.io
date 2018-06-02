import React, { Component } from 'react';
import './Timeline.css';

export class Timeline extends Component {
  render() {
    return (
      <div className="timeline-wrapper">
        <span className="up-arrow" />
        <div className="timeline">
          {this.props.events.map((history) => {
            return (
              <div className="timeline-block" key={history.date}>
                <div className="timeline-content">
                  <h2 className="role">{history.role}</h2>
                  <h3 className="company">{history.company}</h3>
                  <p className="description">{history.description}</p>
                  <div className="container">
                    {history.skills.map((skill) => {
                      return <span className="label label-skill" key={skill}>{skill}</span>
                    })}
                  </div>
                </div>
                <div className="timeline-image">
                  <div className={`sprite ${history.sprite}`}></div>
                </div>
                <span className="date">{history.date}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
