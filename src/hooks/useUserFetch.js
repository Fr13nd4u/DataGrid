import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../redux/actions';

export const useGetFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAsync())
  }, [dispatch]);
  
  const {
    data,
    isFetching,
    error
  } = useSelector(state => state.user);

  return {
    data,
    isFetching,
    error
  }
}

