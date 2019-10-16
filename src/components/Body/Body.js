import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../Section'
import { Navbar } from '../Navbar'
import { 
  IntroductionSectionContent,
  SkillsSectionContent,
  ExperienceSectionContent
} from '../Section/SectionContent'

const propTypes = {
  introduction: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  experiences: PropTypes.array.isRequired
}

const defaultProps = {
  introduction: '',
  skills: [],
  experiences: []
}

/**
 * Body component contains majority of the site content and
 * embodies all the different sections
 */
export const Body = (props) => (
  <React.Fragment>
    <Navbar routes={['Introduction', 'Skills', 'Experience']} />
    <div id="main">
      <Section title="Introduction" titleAlign="left" hideTitle>
        <IntroductionSectionContent description={props.introduction} />
      </Section>
      <Section title="Skills" titleAlign="center">
        <SkillsSectionContent skillList={props.skills} />
      </Section>
      <Section title="Experience" titleAlign="center">
        <ExperienceSectionContent experiences={props.experiences} />
      </Section>
    </div>
  </React.Fragment>
)

Body.propTypes = propTypes
Body.defaultProps = defaultProps