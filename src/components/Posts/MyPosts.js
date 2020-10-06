import React from "react";
import { Post } from "./Post";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators";
import { Textarea } from "../common/formControl/formControl";

const maxLength10 = maxLengthCreator(10);

export const MyPosts = (props) => {
  const onSubmit = (formData) => {
    props.addPost(formData.newPost);
  };
  return (
    <div>
      <div>
        <h2> New post</h2>
        <ReduxMyPostForm onSubmit={onSubmit} />
      </div>
      <h2>My posts</h2>
      <ul>
        {props.posts.map((post) => (
          <Post key={post.id} message={post.message} />
        ))}
      </ul>
    </div>
  );
};

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[required, maxLength10]}
        component={Textarea}
        name="newPost"
        cols="80"
        rows="2"
      />
      <button>Post</button>
    </form>
  );
};

const ReduxMyPostForm = reduxForm({ form: "profileAddNewPostForm" })(
  MyPostForm
);
