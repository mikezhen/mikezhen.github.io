import React, { Component } from 'react';
import skills from 'data/skills.json';

export class SectionSkill extends Component {
  render() {
    const icons = [
      { style: 'style2', img: 'fa-code' },
      { style: 'style3', img: 'fa-sitemap' },
      { style: 'style4', img: 'fa-terminal' },
    ];
    const categories = [];
    let list;
    let icon;
    Object.keys(skills).forEach((key, index) => {
      list = skills[key];
      icon = icons[index];
      categories.push((
        <div className="4u 12u$(medium)" key={key}>
          <span id="skill-icons" className={`icon major ${icon.style} ${icon.img}`} />
          <h3 style={{ fontWeight: 'bold' }}>
            {key.replace(/^\w/, c => c.toUpperCase())}
          </h3>
          <ul className="skill-list">
            {list.map((skill) => {
                return (
                  <li key={skill}>{skill}</li>
                );
            })}
          </ul>
        </div>
      ));
    });
    return (
      <div className="row">
        {categories}
      </div>
    );
  }
}
