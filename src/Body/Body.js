import React, { Component } from 'react';
import { Navbar } from '../Navbar';
import { Section, SectionSkill, SectionIntro, SectionExperience } from '../Section';
import routes from '../data/navigation.json';

export class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: routes
    };
  }

  renderSection(section) {
    let component;
    switch(section) {
      case 'intro':
        component = <SectionIntro person={this.props.person}/>;
        break;
      case 'skills':
        component = <SectionSkill />;
        break;
      case 'experience':
        component = <SectionExperience />;
        break;
      default:
        break;
    }
    return component;
  }

  render() {
    return (
      <React.Fragment>
        <Navbar routes={routes} />
        <div id="main">
          {this.state.routes.map((route) => {
            return (
              <Section section={route.section} title={route.title} key={route.id}>
                {this.renderSection(route.section)}
              </Section>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
