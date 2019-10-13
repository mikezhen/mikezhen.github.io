import React from 'react'
import ScrollUp from 'react-scroll-up'
import './Footer.css'

import Rocket from '../../assets/img/rocket.png'

export const Footer = () => (
  <footer id="footer">
    <ScrollUp showUnder={2200}>
      <img id="scroll-image" src={Rocket} alt="" />
    </ScrollUp>
    <p className="copyright">Beam me up!</p>
  </footer>
)