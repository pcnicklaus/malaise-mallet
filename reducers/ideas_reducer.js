import {
  FETCH_IDEAS
} from '../actions/types';

// const INITIAL_STATE = {
//   results: []
// };

export default function(state=[], action) {
  // console.log('\naction\n', action)
  // console.log('\naction type\n', action.type)
  switch (action.type) {
    case FETCH_IDEAS:
      return action.payload.data;
    default:
      return state;
  }
}
