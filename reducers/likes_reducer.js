import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
  LIKE_IDEA,
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      return [];
    case LIKE_IDEA:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}
//
// case REHYDRATE:
//   return action.payload.likedIdeas || [];
