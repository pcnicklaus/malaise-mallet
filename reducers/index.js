import { combineReducers } from 'redux';
import auth from './auth_reducer';
import ideas from './ideas_reducer';
import likedIdeas from './likes_reducer';

export default combineReducers({
  auth, ideas, likedIdeas
});
