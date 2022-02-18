import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>
                  {expense.description}
                </td>
                <td>
                  {expense.tag}
                </td>
                <td>
                  {expense.method}
                </td>
                <td>
                  { parseFloat(expense.value).toFixed(2) }
                </td>
                <td>
                  {expense.exchangeRates[expense.currency].name.split('/')[0]}
                </td>
                <td>
                  {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
                </td>
                <td>
                  { parseFloat(
                    expense.value * expense.exchangeRates[expense.currency].ask,
                  ).toFixed(2)}
                </td>
                <td>
                  Real
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Table);
