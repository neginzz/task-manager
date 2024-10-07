import React from "react";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

function LoginCol() {
  return (
    <div className="form-section form-right">
      <h3>Login</h3>
      <form id="sign-in-form">
        <Input
          type="text"
          id="username"
          label="Username"
          placeholder="Enter your username"
        />
        <Input
          type="password"
          id="password"
          label="Password"
          placeholder="Enter your password"
        />
        <Checkbox id="remember" label="Remember Password" />
        <Button label="Login" />
      </form>
    </div>
  );
}

export default LoginCol;
