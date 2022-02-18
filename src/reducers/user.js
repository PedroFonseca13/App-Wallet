import { SET_USER_EMAIL } from '../actions/userActions';

const INITIAL_STATE = {
  email: '',
};

const loginReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SET_USER_EMAIL:
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
};

export default loginReducer;
