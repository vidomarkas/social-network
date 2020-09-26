import {
  updateNewPostTextCreator,
  addPostCreator,
} from "../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => dispatch(updateNewPostTextCreator(text)),
  addPost: () => dispatch(addPostCreator()),
});

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
