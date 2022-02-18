import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { connect } from 'react-redux';
import './style.css';

class Header extends Component {
  valorTotal = () => {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach(({ value, exchangeRates, currency }) => {
      total += (Number(value) * Number(exchangeRates[currency].ask));
    });
    return total.toFixed(2);
  }

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
            {this.valorTotal()}
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

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
