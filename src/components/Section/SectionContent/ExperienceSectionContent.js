import React from 'react'
import PropTypes from 'prop-types'
import { Timeline } from '../../Timeline'

const propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.shape({
    /** Name of company */
    companyName: PropTypes.string.isRequired,
    /** Job title */
    roleTitle: PropTypes.string.isRequired,
    /** experienceType attribute is tightly coupled with CSS class which sets background image */
    experienceType: PropTypes.oneOf(['work', 'academic']).isRequired,
    /** Should be in format MM YYYY */
    startDate: PropTypes.string.isRequired,
    /** Should be in format MM YYYY */
    endDate: PropTypes.string.isRequired,
    /** Description of the role and responsbilities */
    roleDescription: PropTypes.string.isRequired,
    /** List of skills involved in role */
    skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired)
}

const defaultProps = {
  experiences: []
}

/**
 * ExperienceSectionContent is child component which contains
 * content pertaining to the experience section
 */
export const ExperienceSectionContent = (props) => (
  <Timeline experiences={props.experiences} />
)

ExperienceSectionContent.propTypes = propTypes
ExperienceSectionContent.defaultProps = defaultProps