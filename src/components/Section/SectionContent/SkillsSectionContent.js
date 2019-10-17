import React from 'react'
import PropTypes from 'prop-types'
import './SkillsSectionContent.css'

const propTypes = {
  /** List of skill objects which describes the skill and type */
  skillList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }))
}

const defaultProps = {
  skillList: []
}

// Mapping of skill labels to corresponding icons
const skillLabelMap = {
  language: 'fa-code',
  framework: 'fa-sitemap',
  tool: 'fa-terminal',
  miscellanous: 'fa-cubes'
}

// Priority list of skill label to display with first being highest priority
const skillLabelOrder = [
  'language',
  'framework',
  'tool',
  'miscellanous'
]

/**
 * SkillsSectionContent is a child component used to configure and
 * display content for relevant skills section
 */
export const SkillsSectionContent = (props) => {
  // Create a Misc list if there are any skills that don't match the predefined label
  // Go through the skill list and pull out the distinct skill labels
  let skillGroup = {}
  // Create skillGroup based on skillLabelOrder
  skillLabelOrder.forEach((label) => {
    skillGroup[label] = {
      icon: skillLabelMap[label],
      skills: []
    }
  })
  props.skillList.forEach((skill) => {
    let label = skill.label,
        name = skill.name
    // Append skill to list that match label, miscellanous otherwise
    if (skillGroup.hasOwnProperty(label)) {
      skillGroup[label].skills.push(name)
    } else {
      skillGroup['miscellanous'].skills.push(name)
    }
  })

  // Determine width of each skill group column; max page width is 12u
  let columnWidth = 12 / skillLabelOrder.filter((label) => skillGroup[label].skills.length > 0).length

  return (
    <div className="row">
      {
        skillLabelOrder.map((label, i) => {
          let group = skillGroup[label]
          return group.skills.length > 0 ? (
            <div className={`${columnWidth}u 12u$(medium)`} key={label}>
              <span id="skill-icons" className={`icon major ${group.icon} style${i + 1}`} />
              <h3 style={{ fontWeight: 'bold' }}>
                {label.replace(/^\w/, c => c.toUpperCase())}
              </h3>
              <ul className="skill-list">
                { 
                  group.skills.map(skill => 
                    <li key={skill}>{skill}</li>)
                }
              </ul>
            </div>
          ) : null
        })
      }
    </div>
  )
}

SkillsSectionContent.propTypes = propTypes
SkillsSectionContent.defaultProps = defaultProps
