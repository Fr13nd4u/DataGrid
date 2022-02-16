import axios from 'axios';

import { types } from './types';

export const userActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.USER_START_FETCHING,
    }
  },
  stopFetching: () => {
    return {
      type: types.USER_STOP_FETCHING
    }
  },
  fill: (payload) => {
    return {
      type: types.USER_FILL,
      payload
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.USER_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },

  // Async
  getAsync: () => async(dispatch) => {
    dispatch(userActions.startFetching());

    await axios.get('/api/users')
    .then(res => {
      dispatch(userActions.fill(res.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(userActions.setFetchingError(error.response))
    })

    dispatch(userActions.stopFetching());
  },

  // postAsync: () => async(dispatch) => {
  //   dispatch(userActions.startFetching());

  //   await axios.post('/api/users')

  // },

  // editAsync: () => async(dispatch) => {
  //   dispatch(userActions.startFetching());
    
  //   await axios.edit('/api/users')

  // }
})