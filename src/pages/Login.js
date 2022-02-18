import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LENGTH_INPUT_PASSWORD } from '../data/Data';
import { setUserEmail } from '../actions/userActions';

import '../styles/Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputEmail: '',
      inputPassword: '',
      isDisabled: true,
      // isLoading: false,
      // isRedirect: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateLogin);
  };

  validateEmail = (email) => {
    const rex = /\S+@\S+\.\S+/;
    return rex.test(email);
    // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  }

  validateLogin = () => {
    const { inputEmail, inputPassword } = this.state;
    if (this.validateEmail(inputEmail) && inputPassword.length >= LENGTH_INPUT_PASSWORD) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleClick = () => {
    const { getEmail, history } = this.props;
    const { inputEmail } = this.state;
    getEmail(inputEmail);
    history.push('/carteira');
  }

  render() {
    const { inputEmail, inputPassword, isDisabled } = this.state;

    return (
      <div className="container">
        <form className="form">
          <label
            htmlFor="email"
            className="label"
          >
            Usuario
            <input
              type="email"
              data-testid="email-input"
              id="email"
              name="inputEmail"
              value={ inputEmail }
              onChange={ this.handleChange }
            />
          </label>
          <label
            className="label"
            htmlFor="password"
          >
            Senha
            <input
              type="password"
              data-testid="password-input"
              id="password"
              name="inputPassword"
              value={ inputPassword }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ isDisabled }
            className="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  getEmail: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(setUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
