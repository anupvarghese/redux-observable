import C from '../constants';
import { fetchUserFulfilled } from '../actions/user'
import { axios } from 'axios';


export default action$ =>
  action$.ofType(C.FETCH_USER)
    .mergeMap(action =>
      axios({
        url: `https://api.github.com/users/${action.payload}`,
        method: 'GET',
        responseType: 'json',
      }).map(fetchUserFulfilled)
    );

