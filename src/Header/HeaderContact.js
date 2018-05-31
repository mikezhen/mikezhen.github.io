import React, { Component } from 'react';
import data from '../data/contact.json';

export class HeaderContact extends Component {
  render() {
    const contacts = [];
    data.forEach((contact) => {
      contacts.push(
        <li key={contact.form}>
          <a href={contact.url} className={`icon fa-${contact.sprite} alt`}>
            <span className="label">{contact.form}</span>
          </a>
        </li>
      );
    });

    return (
      <ul className="icons">
        {contacts}
      </ul>
    );
  }
}
