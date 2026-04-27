import { ResumeSection } from './ResumeSection'
import './Resume.css'

type Experience = {
    company: string;
    role: string;
    period: string;
    description: Array<string>;
}

type Education = {
    school: string;
    degree: string;
    period: string;
}

interface ResumeProps {
    experience: Array<Experience>;
    education: Array<Education>;
}

export default function Resume({ experience, education }: ResumeProps) {
  return (
    <>
      {/* Work Experience */}
      <ResumeSection title="Work Experience">
        {experience.map((exp) => (
          <article key={exp.company} className="exp-card">
            <div className="exp-meta">
              <p className="exp-period">{exp.period}</p>
              <span className="exp-company">{exp.company}</span>
            </div>
            <div>
              <h3 className="exp-role">{exp.role}</h3>
              <ul className="exp-bullets">
                {exp.description.map((desc, i) => (
                  <li key={i} className="exp-bullet">{desc}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}

      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        {education.map((edu) => (
          <article key={edu.school} className="exp-card">
            <div className="exp-meta">
              <p className="exp-period">{edu.period}</p>
            </div>
            <div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-school">{edu.school}</p>
            </div>
          </article>
        ))}
      </ResumeSection>
    </>
  )
}