import React from 'react'
import PropTypes from 'prop-types'
import { HoverToggleButton } from '../../Button/HoverToggleButton'

import Selfie from '../../../assets/img/selfie.jpg'
import Resume from '../../../assets/mikezhen.pdf'

const propTypes = {
  /** Title of the section */
  title: PropTypes.string,
  /** Introduction description or summary */
  description: PropTypes.string
}

const defaultProps = {
  title: 'Introduction',
  description: ''
}

/**
 * IntroductionSectionContent is child component which contains the
 * content for introduction section
 */
export const IntroductionSectionContent = (props) => {
  return (
    <div className="spotlight">
      <div className="content">
        <header className="major">
          { props.title ? (<h2>{props.title}</h2>) : null }
        </header>
        <p>{props.description}</p>
        <HoverToggleButton size="medium"
          defaultValue="Get Resume"
          hoverValue={<span className="icon fa-download" />}
          onMouseClick={() => window.open(Resume)}
        />
      </div>
      <span className="image">
        <img src={Selfie} alt="" />
      </span>
    </div>
  )
}

IntroductionSectionContent.propTypes = propTypes
IntroductionSectionContent.defaultProps = defaultProps