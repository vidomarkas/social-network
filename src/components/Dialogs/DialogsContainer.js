import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateTextArea: (text) => dispatch(updateNewMessageBodyCreator(text)),
    sendMessage: () => dispatch(sendMessageCreator()),
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRedirect(Dialogs));
