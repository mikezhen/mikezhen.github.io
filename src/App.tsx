import Sidebar from './components/Sidebar'
import Resume from './components/Resume'
import Person from './data/introduction.json'
import './App.css'

export default function App() {
  return (
    <div className="layout">
      <Sidebar
        name={Person.name}
        role={Person.role}
        description={Person.description}
        contact={Person.contact}
      />

      <div className="main-col">
        <main className="main-body">
          <Resume
            experience={Person.experience}
            education={Person.education}
          />
        </main>
      </div>
    </div>
  )
}
