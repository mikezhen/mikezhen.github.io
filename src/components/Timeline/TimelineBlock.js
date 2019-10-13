import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  experience: PropTypes.shape({
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
  }).isRequired
}

const defaultProps = {
  experience: {
    company: '',
    roleTitle: '',
    experienceType: 'academic',
    startDate: '',
    endDate: '',
    roleDescription: '',
    skills: []
  }
}

/**
 * TimelineBlock component holds information for a particular
 * event in the span of timeline
 */
export const TimelineBlock = (props) => {
  let e = props.experience
  return (
    <div className="timeline-block" key={`${e.startDate} - ${e.endDate}`}>
      <div className="timeline-content">
        <h2 className="role">{e.roleTitle}</h2>
        <h3 className="company">{e.companyName}</h3>
        <p className="description">{e.roleDescription}</p>
        <div className="container">
          {e.skills.map(s =>
              (<span className="label label-skill" key={s}>
                {s}
              </span>)
          )}
        </div>
      </div>
      <div className="timeline-image">
        <div className={`sprite ${e.experienceType}`} />
      </div>
      <span className="date">{`${e.startDate} - ${e.endDate}`}</span>
    </div>
  )
}

TimelineBlock.propTypes = propTypes
TimelineBlock.defaultProps = defaultProps
