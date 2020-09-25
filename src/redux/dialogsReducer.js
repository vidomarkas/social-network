import { UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE } from "./types";

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
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 7, message: body }],
        newMessageBody: "",
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});
export default dialogsReducer;
