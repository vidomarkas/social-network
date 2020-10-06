import React from "react";
import s from "./Dialogs.module.scss";
import { Message } from "./Message";
import DialogItem from "./DialogItem";
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators";
import { Textarea } from "../common/formControl/formControl";

const maxLength160 = maxLengthCreator(160);

export const Dialogs = (props) => {
  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody);
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
        <AddMesageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMesageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength160]}
          component={Textarea}
          placeholder="Enter your message"
          name="newMessageBody"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMesageFormRedux = reduxForm({ form: "dialogsAddMesageForm" })(
  AddMesageForm
);
