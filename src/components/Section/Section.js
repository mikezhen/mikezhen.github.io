import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  children: PropTypes.element
}

const defaultProps = {
  title: null,
  titleAlign: 'center',
  children: <React.Fragment />
}

/**
 * Section is a generic container component which includes
 * a section title and content is configured by child components
 */
export const Section = (props) => {
  let titleAlign = props.titleAlign === 'left' ? '' : 'special'
  return (<section id={props.title} className={`main ${titleAlign}`}>
    { props.title ? 
      (
        <header className="major">
          <h2>{props.title}</h2>
        </header>
      ) :
      null
    }
    {props.children}
  </section>)
}

Section.propTypes = propTypes
Section.defaultProps = defaultProps