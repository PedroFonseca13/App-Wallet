import { ADD_EXPENSES } from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...payload,
        id: state.expenses.length,
      }],
    };
  case 'FETCH_TUNK':
    return { ...state };

  default:
    return state;
  }
};

export default wallet;
