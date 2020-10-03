import React from "react";
import s from "./Dialogs.module.scss";
import { Message } from "./Message";
import DialogItem from "./DialogItem";

export const Dialogs = (props) => {
  const onSendMessage = () => {
    props.sendMessage();
  };
  const onTextAreaUpdate = (e) => {
    props.updateTextArea(e.target.value);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogsData.map((dialog) => (
          <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
        ))}
      </div>
      <div className={s.messages}>
        {props.messagesData.map((message) => (
          <Message
            message={message.message}
            likesCount={message.likesCount}
            key={message.id}
          />
        ))}
        <div>
          <div>
            <textarea
              value={props.newMessageBody}
              onChange={onTextAreaUpdate}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={() => onSendMessage()}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
