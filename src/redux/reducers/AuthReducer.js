import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_IN_PROGRESS,
  USER_IS_VALID,
  USER_NAME_CHANGED,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
} from '../types.js';

const INITIAL_STATE = {
  user_name: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_NAME_CHANGED: {
      return {...state, user_name: action.payLoad};
    }
    case FIRST_NAME_CHANGED: {
      return {...state, first_name: action.payLoad};
    }
    case LAST_NAME_CHANGED: {
      return {...state, last_name: action.payLoad};
    }
    case EMAIL_CHANGED: {
      return {...state, email: action.payLoad};
    }
    case PASSWORD_CHANGED: {
      return {...state, password: action.payLoad};
    }
    case LOGIN_IN_PROGRESS: {
      const bool = action.payLoad === 'true' ? true : false;
      return {...state, loading: bool};
    }
    case USER_IS_VALID: {
      const bool = action.payLoad === 'true' ? true : false;
      return {...state, validUser: bool};
    }
    default:
      return state;
  }
};
