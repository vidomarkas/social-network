import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Input } from "../common/formControl/formControl";
import { required } from "../../utils/validators";
import { Redirect } from "react-router-dom";
import styles from "../common/formControl/formControl.module.scss";

const Login = ({ login, isAuth }) => {
  const onSubmit = (formData) => {
    login(formData);
  };
  if (isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
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
        <Field component={Input} name="rememberMe" type="checkbox" />
        Remember me
      </div>
      {error && (
        <div className={styles.formError}>
          <div>{error}</div>
        </div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
