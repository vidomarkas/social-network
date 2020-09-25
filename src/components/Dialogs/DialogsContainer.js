import React from "react";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  const onSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };
  const onTextAreaUpdate = (text) => {
    props.store.dispatch(updateNewMessageBodyCreator(text));
  };
  return (
    <Dialogs
      dialogsData={state.dialogsData}
      messagesData={state.messagesData}
      newMessageBody={state.newMessageBody}
      onTextAreaUpdate={onTextAreaUpdate}
      onSendMessage={onSendMessage}
    />
  );
};
