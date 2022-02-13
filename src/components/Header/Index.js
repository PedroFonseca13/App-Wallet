import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { connect } from 'react-redux';
import './style.css';

class Header extends Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <div>
          <h3>TrybeWallet</h3>
        </div>
        <div>
          <div data-testid="email-field">
            <FaUserAlt />
            {' '}
            {email}
          </div>
          <div data-testid="total-field">
            <MdAttachMoney />
            {' '}
            0
            <span data-testid="header-currency-field">{' BRL'}</span>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.any,
}.isRequired;

const mapStateToProps = ({ loginReducer }) => ({
  email: loginReducer.email,
});

export default connect(mapStateToProps)(Header);
