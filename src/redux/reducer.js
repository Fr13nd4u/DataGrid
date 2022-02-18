import { types } from './types';

const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.USER_START_FETCHING: 
      return {
        ...state,
        isFetching: true,
      };
    
    case types.USER_STOP_FETCHING: 
      return {
        ...state,
        isFetching: false,
      };

    case types.USER_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null,
      };

    case types.USER_FILL:
      return {
        ...state,
        data: payload,
        error: null,
      };

      case types.ADD_USER_SUCCESS:
        return {
          ...state,
          data: payload,
          error: null,
        };

      case types.ADD_USER_FAILURE:
        return {
          ...state,
          error: payload,
          data: null,
        };

    default:
      return state
  }
}