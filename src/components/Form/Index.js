import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpenses, fetchTunk } from '../../actions/walletActions';
import fetchApi from '../../services/fetch';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      moedas: [],
      exchangeRates: {},
    };
  }

  componentDidMount() {
    this.getCoins();
  }

  getCoins = async () => {
    const coins = await fetchApi();
    this.setState({
      moedas: Object.keys(coins).filter((coin) => coin !== 'USDT'),
      exchangeRates: coins,
    });
    return coins;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { expensesAction, fetchTunkApi } = this.props;
    const {
      currency,
      description,
      exchangeRates,
      method,
      tag,
      value,
    } = this.state;
    const expensesObj = {
      currency,
      description,
      exchangeRates,
      method,
      tag,
      value,
    };

    expensesAction(expensesObj);

    fetchTunkApi();

    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  render() {
    const { moedas, value, description, method, tag } = this.state;
    return (
      <div className="">
        <form className="form-header">
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
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              type="text"
              data-testid="currency-input"
              name="currency"
              onChange={ this.handleChange }
            >
              { moedas.map((coin) => (
                <option
                  key={ coin }
                  data-testid={ coin }
                  value={ coin }
                >
                  { coin }
                </option>))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select
              id="method"
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            TAG
            <select
              id="tag"
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
          {/* data-testid="total-field" */}
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  coinsOptions: PropTypes.func,
  fetchCurrency: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  fetchTunkApi: () => dispatch(fetchTunk()),
  expensesAction: (payload) => dispatch(addExpenses(payload)),
});

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
// 1:13
