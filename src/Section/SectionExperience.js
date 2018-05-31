import React, { Component } from 'react';
import { Timeline } from '../Timeline';
import events from '../data/timeline.json';

export class SectionExperience extends Component {
  render() {
    return (
      <React.Fragment>
        <Timeline events={events}/>
      </React.Fragment>
    );
  }
}
