import React, { Component } from 'react';
import skills from '../data/skills.json';

export class SectionSkill extends Component {
  render() {
    const categories = [];
    for (let category in skills) {
      categories.push(
        <div className="4u 12u$(medium)" key={category}>
          <h3>{category.replace(/^\w/, c => c.toUpperCase())}</h3>
          <ul>
            {skills[category].map((skill) =>
              <li key={skill}>{skill}</li>
            )}
          </ul>
        </div>
      )
    }
    return (
      <div className="row">
        {categories}
      </div>
    );
  }
}
