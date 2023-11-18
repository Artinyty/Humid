const SEND_MESSAGER = 'SEND-MESSAGER';
let initialStore = {
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
};

const dialogsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SEND_MESSAGER: {
      let body = action.newMsgBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };

    }
    default:
      return state;
  }
};

export const sendMessegeCreator = (newMsgBody) => ({ type: SEND_MESSAGER, newMsgBody });
export default dialogsReducer;