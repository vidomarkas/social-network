import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData);
  };
  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="input" name="login" type="text" placeholder="login" />
      </div>
      <div>
        <Field
          component="input"
          name="password"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <Field component="input" name="rememberMe" type="checkbox" /> Remember
        me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default connect(null, { login })(Login);
