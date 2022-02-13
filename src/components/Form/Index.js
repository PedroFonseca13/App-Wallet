import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpenses } from '../../store/actions';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  getStaged = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = response.json();
    return data;
  }

  handleSave = () => {
    const { addNewExpenses } = this.props;
    // const staged = await this.getStaged();
    addNewExpenses(this.state);
    this.setState({
      value: 0,
      description: '',
    });
  }

  render() {
    const { value, description } = this.state;

    return (
      <div className="">
        <form className="">
          <label htmlFor="value">
            Valor $
            <input
              type="number"
              id="value"
              data-testid="value-input"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              type="text"
              data-testid="description-input"
              name="description"
              onChange={ this.handleChange }
              value={ description }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <input
              id="currency"
              type="text"
              data-testid="currency-input"
              name="currency"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select
              id="method"
              data-testid="method-input"
              name="method"
              onChange={ this.handleChange }
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao de credito">Cartão de crédito</option>
              <option value="cartao de debito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            TAG
            <select
              id="tag"
              data-testid="tag-input"
              name="tag"
              onChange={ this.handleChange }
            >
              <option value="Alimentacao">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saude">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleSave }>Adicionar despesa</button>
          {/* data-testid="total-field" */}
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  addExpenses: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addNewExpenses: (expenses) => dispatch(addExpenses(expenses)),
});

export default connect(null, mapDispatchToProps)(Form);
