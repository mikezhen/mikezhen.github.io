import React from 'react'
import PropTypes from 'prop-types'
import './Timeline.css'
import { TimelineBlock } from './TimelineBlock'

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
 * Timeline component that display information blocks
 * in chronological order based on start/end dates
 * 
 * TODO: Sort experiences by date prior to creating TimelineBlock
 */
export const Timeline = (props) => (
  <div className="timeline-wrapper">
    <span className="up-arrow" />
    <div className="timeline">
      {
        props.experiences.map((e, i) =>
          <TimelineBlock experience={e} key={i} />
        )
      }
    </div>
  </div>
)

Timeline.propTypes = propTypes
Timeline.defaultProps = defaultProps