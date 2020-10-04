import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div>
        <input type="text" placeholder="login" />
      </div>
      <div>
        <input type="password" placeholder="password" />
      </div>
      <div>
        <input type="checkbox" /> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const Login = () => {
  return (
    <div>
      <h1>login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
