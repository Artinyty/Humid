const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const APDATE_NEW_MSG_BODY = 'UPDATE-NEW-MSG-BODY';
const SEND_MESSAGER = 'SEND-MESSAGER'

let store = {
  _state: {

    profilePage: {
      newPostText: 'it-kamasutra',
      posts: [
        { id: 1, message: "Hi, I believe in you ", likeCount: 55 },
        { id: 2, message: "Hi, I believe in you ", likeCount: 55 },
        { id: 5, message: "It's my first post", likeCount: 40 }
      ],
      newMsgBody: ''


    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Dimch' },
        { id: 2, name: 'Egor' },
        { id: 3, name: 'Tom' },
        { id: 4, name: 'Alexis' },
        { id: 5, name: 'Eleit' }
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Guten Morgen" },
        { id: 3, message: 'Wer gehts' },
        { id: 4, message: 'Alll ist Gut' },
        { id: 5, message: 'Guten Abend' }
      ]
    },
    sidebar: {}
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log('State is change');
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === APDATE_NEW_MSG_BODY) {
      this._state.dialogsPage.newMsgBody = action.body;
      this._callSubscriber(this._state);
    }
    else if (action.type === SEND_MESSAGER) {
      let body = this._state.dialogsPage.newMsgBody;
      this._state.dialogsPage.newMsgBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }

  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
};

export const sendMessegeCreator = () => ({ type: SEND_MESSAGER });
export const updateNewMessegeBodyCreator = (body) => {
  return { type: APDATE_NEW_MSG_BODY, body: body }
};

export default store;
window.Storage = store;



