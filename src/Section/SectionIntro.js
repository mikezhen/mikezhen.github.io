import React, { Component } from 'react';
import person from '../data/intro';

export class SectionIntro extends Component {
  render() {
    return (
      <div className="row">
        <div className="spotlight">
          <p>{person.background}</p>
          <span className="image"><img src="https://media.licdn.com/dms/image/C5603AQH4k6Sw4lLMyQ/profile-displayphoto-shrink_200_200/0?e=1533168000&v=beta&t=7L6jB_FyKRFLuCV8WCtquyFp8_AMTCEDrsr6kl0gpHk" alt="" /></span>
        </div>
      </div>
    );
  }
}
