import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Input } from "../common/formControl/formControl";
import { required } from "../../utils/validators";

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
        <Field
          component={Input}
          name="login"
          type="text"
          placeholder="login"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name="password"
          type="password"
          placeholder="password"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name="rememberMe"
          type="checkbox"
          validate={[required]}
        />{" "}
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default connect(null, { login })(Login);
