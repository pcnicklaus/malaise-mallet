import { ACTIVE_IDEA } from '../actions/types';

export default function(state = {}, action) {

  switch (action.type) {
    case ACTIVE_IDEA:
      return action.payload;
    default:
      return state;
  }

}
