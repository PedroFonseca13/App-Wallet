import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  render() {
    return (
      <div className="">
        <form className="">
          <label htmlFor="value">
            Valor $
            <input
              type="number"
              id="value"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              type="text"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <input
              id="currency"
              type="text"
              data-testid="currency-input"
            />
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select
              id="method"
              data-testid="method-input"
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
            >
              <option value="Alimentacao">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saude">Saúde</option>
            </select>
          </label>
          <button type="button">Adicionar despesa</button>
          {/* data-testid="total-field" */}
        </form>
      </div>
    );
  }
}
