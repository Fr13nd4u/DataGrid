import { types } from './types';
import { users } from '../data/users';

const initialState = {
  data: {users}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_FILL: {
      return {
        ...state,
        data: action.payload,
      } 
    }
  
    default:
      return state
  }
}