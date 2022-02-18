import fetchApi from '../services/fetch';

export const ADD_EXPENSES = 'ADD_EXPENSES';

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const fetchTunk = () => async (dispatch) => {
  try {
    await fetchApi();
    dispatch({
      type: 'FETCH_TUNK',
    });
  } catch (error) {
    console.error(error);
  }
};
