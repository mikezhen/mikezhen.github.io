import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'

import Person from './data/introduction.json'

const App = () => (
  <div id="wrapper" className="App">
    <Header name={Person.name}
      role={Person.role}
      location={Person.location}
      contacts={Person.contacts}
    />
    <Body introduction={Person.description}
      skills={Person.skills}
      experiences={Person.experiences}
    />
    <Footer />
  </div>
)

export default App
