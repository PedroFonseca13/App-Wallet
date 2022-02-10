import React, { Component } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h3>TrybeWallet</h3>
        </div>
        <div>
          <FaUserAlt />
        </div>
      </header>
    );
  }
}
