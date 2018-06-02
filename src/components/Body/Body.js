import React, { Component } from 'react';
import routes from 'data/navigation.json';
import PropTypes from 'prop-types';
import { Navbar } from '../Navbar';
import { Section, SectionSkill, SectionIntro, SectionExperience } from '../Section';

const propTypes = {
  background: PropTypes.string,
  resumeUrl: PropTypes.string,
  imgUrl: PropTypes.string,
};

const defaultProps = {
  background: 'Description',
  resumeUrl: '',
  imgUrl: '',
};

export class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { routes };
  }

  renderSection(section) {
    let component;
    switch (section) {
      case 'intro':
        component = (
          <SectionIntro
            background={this.props.background}
            resumeUrl={this.props.resumeUrl}
            imgUrl={this.props.imgUrl}
          />
        );
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

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;
