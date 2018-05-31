import React, { Component } from 'react';
import { Navbar } from '../Navbar';
import { Section, SectionSkill, SectionIntro, SectionExperience } from '../Section';
import routes from '../data/navigation.json';
import { Timeline } from '../Timeline';

export class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: routes
    };
  }

  render() {
    return (
      <React.Fragment>
        <Navbar routes={routes} />
        <div id="main">
          {this.state.routes.map((route) => {
            return (
              <Section section={route.section} title={route.title} key={route.id}>
                {route.section === 'skills' && <SectionSkill />}
                {route.section === 'intro' && <SectionIntro />}
                {route.section === 'experience' && <SectionExperience />}
              </Section>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
