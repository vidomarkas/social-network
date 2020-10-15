// Action types
const SEND_MESSAGE = "dialogs/SEND_MESSAGE";

// Initial state
const initialState = {
  messagesData: [
    { id: 1, message: "hi", likesCount: 5 },
    { id: 2, message: "this is a message", likesCount: 15 },
    { id: 3, message: "hi", likesCount: 51 },
    { id: 4, message: "hello", likesCount: 52 },
    { id: 5, message: "yo", likesCount: 10 },
    { id: 6, message: "hi", likesCount: 8 },
  ],
  dialogsData: [
    { id: 1, name: "Jim" },
    { id: 2, name: "John" },
    { id: 3, name: "Andrew" },
    { id: 4, name: "Louise" },
    { id: 5, name: "Kara" },
    { id: 6, name: "Michael" },
  ],
};

// Reducer
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: state.messagesData.length + 1, message: action.newMessageBody },
        ],
        newMessageBody: "",
      };
    default:
      return state;
  }
};

// Action creators
export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
