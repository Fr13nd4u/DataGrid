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
  addUserSuccess: (payload) => {
    return {
      type: types.ADD_USER_SUCCESS,
      payload
    }
  },
  addUserFailure: (error) => {
    return {
      type: types.ADD_USER_FAILURE,
      error: true,
      payload: error
    }
  },

  // Async
  getAsync: () => async(dispatch) => {
    dispatch(userActions.startFetching());

    await axios.get('/api/users')
    .then(response => {
      dispatch(userActions.fill({users: response.data.users.map((item) => ({
        ...item,
        LastLogin: new Date(item.LastLogin)
      }))}));
    })
    .catch(error => {
      dispatch(userActions.setFetchingError(error.response))
    })

    dispatch(userActions.stopFetching());
  },

  postUser: () => (dispatch) => (userObj) => {
    axios.post('/api/users/post', {userObj})
    .then(response => {
      dispatch(userActions.addUserSuccess({users: {...response.data.users, LastLogin: new Date(response.data.users.LastLogin)}}));
    })
    .catch(error => {
      dispatch(userActions.addUserFailure(error))
    })
  },

  // editAsync: () => async(dispatch) => {
  //   dispatch(userActions.startFetching());
    
  //   await axios.edit('/api/users')

  // }
})