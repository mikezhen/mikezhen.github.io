import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HoverToggleButton.css'

const propTypes = {
  /** Size of button. Valid values: [small, medium, big] */
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  /** Default button content */
  defaultValue: PropTypes.any,
  /** Button content when mouse cursor hovers over it */
  hoverValue: PropTypes.any,
  /** Function that handles mouse click on button */
  onMouseClick: PropTypes.func
}

const defaultProps = {
  size: 'small',
  color: 'special', // TODO: Add more color selections
  defaultValue: '',
  hoverValue: '',
  onMouseClick: () => {}
}

/**
 * HoverToggleButton component is a standard button which
 * toggles the content depending on default and hover value
 * when mouse cursor is hovering over the button.
 */
export class HoverToggleButton extends Component {
  constructor() {
    super()
    this.state = {
      hoverState: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter() {
    this.setState({
      hoverState: true
    })
  }

  handleMouseLeave() {
    this.setState({
      hoverState: false
    })
  }

  render() {
    let className = `${this.props.color} ${this.props.size}`
    return (
      <button className={className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.props.onMouseClick}
      >
        { this.state.hoverState ? this.props.hoverValue : this.props.defaultValue }
      </button>
    )
  }
}

HoverToggleButton.propTypes = propTypes
HoverToggleButton.defaultProps = defaultProps