import React from "react";
import s from "./Dialogs.module.scss";
import { Message } from "./Message";
import DialogItem from "./DialogItem";

export const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Jim" },
    { id: 2, name: "John" },
    { id: 3, name: "Andrew" },
    { id: 4, name: "Louise" },
    { id: 5, name: "Kara" },
    { id: 6, name: "Michael" },
  ];
  let messagesData = [
    { id: 1, message: "hi", likesCount: 5 },
    { id: 2, message: "this is a message", likesCount: 15 },
    { id: 3, message: "hi", likesCount: 51 },
    { id: 4, message: "hello", likesCount: 52 },
    { id: 5, message: "yo", likesCount: 10 },
    { id: 6, message: "hi", likesCount: 8 },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={s.messages}>
        <Message
          message={messagesData[0].message}
          likesCount={messagesData[0].likesCount}
        />
        <Message
          message={messagesData[1].message}
          likesCount={messagesData[1].likesCount}
        />
        <Message
          message={messagesData[2].message}
          likesCount={messagesData[2].likesCount}
        />
        <Message
          message={messagesData[3].message}
          likesCount={messagesData[3].likesCount}
        />
        <Message
          message={messagesData[4].message}
          likesCount={messagesData[4].likesCount}
        />
        <Message
          message={messagesData[5].message}
          likesCount={messagesData[5].likesCount}
        />
      </div>
    </div>
  );
};
