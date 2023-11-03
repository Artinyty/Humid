import { usersAPI } from '../api/api.js'

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialStore = {
  newPostText: 'it-kamasutra',
  posts: [
    { id: 1, message: "Hi, I believe in you ", likeCount: 55 },
    { id: 2, message: "Hi, I believe in you ", likeCount: 55 },
    { id: 5, message: "It's my first post", likeCount: 40 }
  ],
  // newMsgBody: '',
  profile: null,
  aboutMe: null
};

const profileReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };

    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
}


export default profileReducer;