import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  getState() {
    return this._state;
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "This is a post" },
        { id: 2, message: "This is a post number 2" },
        { id: 3, message: "This is a post number 3" },
        { id: 4, message: "This is a post number 4" },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {
    console.log("state is changed :>> ");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
