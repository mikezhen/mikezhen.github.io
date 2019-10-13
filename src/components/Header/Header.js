import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../logo.svg'
import './Header.css'

const propTypes = {
  /** Name of the person */
  name: PropTypes.string,
  /** Person's role */
  role: PropTypes.string,
  /** Current location */
  location: PropTypes.string,
  /** List of contact methods */
  contacts: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired)
};

const defaultProps = {
  name: 'Name',
  role: 'Role',
  location: 'Location',
  contacts: []
}

// Mapping of contact method to corresponding icon
const contactIconMap = {
  email: 'fa-envelope',
  linkedin: 'fa-linkedin',
  github: 'fa-github',
  phone: 'fa-phone'
}

/**
 * Header component displays the headline information which
 * includes the name, role, location and contact
 */
export const Header = (props) => {
  return (
    <header id="header" className="alt">
      <span className="logo"><img src={logo} alt="" /></span>
      <h1>{props.name}</h1>
      <p>{props.role}</p>
      <div className="location row">
        <i className="icon fa-map-marker" />
        <p>{props.location}</p>
      </div>

      <ul className="icons">
        {props.contacts.map((c) => (
          <li key={c.link}>
            <a href={c.link} className={`icon ${contactIconMap[c.method]} alt`}>
              <span className="label">{c.method}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
