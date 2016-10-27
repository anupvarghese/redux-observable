import C from '../constants';

const fetchUser = name => ({ 
  type: C.FETCH_USER,
  payload: name,
});

const fetchUserFulfilled = payload => ({
  type: C.FETCH_USER_FULFILLED,
  payload,
});

export {
  fetchUser,
  fetchUserFulfilled,
};
