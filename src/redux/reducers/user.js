import C from '../constants';
import { EPIC_END } from 'redux-observable';


export default(state = {}, action) => {
  switch (action.type) {
    case EPIC_END:
    case C.FETCH_USER_FULFILLED:
      return {
        ...state,
        [action.payload.name]: action.payload,
      }
    default:
      return state;
  }
};
