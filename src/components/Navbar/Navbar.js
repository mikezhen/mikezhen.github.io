import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string.isRequired)
}

const defaultProps = {
  routes: []
}

export const Navbar = (props) => (
  <nav id="nav">
    <ul>
      {
        props.routes.map((route) => (
          <li key={route}>
            <a href={`#${route}`}>{route}</a>
          </li>
        ))
      }
    </ul>
  </nav>
)

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
