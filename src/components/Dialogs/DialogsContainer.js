import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
