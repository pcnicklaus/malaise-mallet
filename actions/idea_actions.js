import axios from 'axios';

import {
  FETCH_IDEAS,
  LIKE_IDEA
} from './types';

export const fetchIdeas = () => async (dispatch) => {
  try {
    let data = await axios.get('http://localhost:3050/idea');
    dispatch({ type: FETCH_IDEAS, payload: data });
    // callback();
  } catch(e) {
    // console.log('here in fetchjobs catch')
    // console.error('error in fetch ideas', e);
  }
};

export const likeIdea = (idea) => {
  // console.log('firing like idea,', idea)
  return {
    payload: idea,
    type: LIKE_IDEA
  };
};


// export const clearLikedJobs = () => {
//   return { type: CLEAR_LIKED_JOBS };
// };




//
// export function signinUser({ email, password }) {
//   return function(dispatch) {
//     // Submit email/password to the server
//     axios.post(`${ROOT_URL}/signin`, { email, password })
//       .then(response => {
//         // If request is good...
//         // - Update state to indicate user is authenticated
//         dispatch({ type: AUTH_USER });
//         // - Save the JWT token
//         localStorage.setItem('token', response.data.token);
//         // - redirect to the route '/feature'
//         browserHistory.push('/');
//       })
//       .catch(() => {
//         // If request is bad...
//         // - Show an error to the user
//         dispatch(authError('Bad Login Info'));
//       });
//   }
// }



// const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
// const JOB_QUERY_PARAMS = {
//   publisher: '4201738803816157',
//   format: 'json',
//   v: '2',
//   latlong: 1,
//   radius: 10,
//   q: 'javascript'
// };

// const buildJobsUrl = (zip) => {
//   const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
//   return `${JOB_ROOT_URL}${query}`;
// };
