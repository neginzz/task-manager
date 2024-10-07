import React from "react";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

function SignupCol() {
  return (
    <div className="form-section form-right">
      <h3>Sign Up</h3>
      <form id="sign-up-form">
        <Input
          type="text"
          id="username"
          label="Username"
          placeholder="Enter your username"
        />
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="m@example.com"
        />
        <Input
          type="password"
          id="password"
          label="Password"
          placeholder="Enter your password"
        />
        <Checkbox id="remember" label="Remember Password" />
        <Button label="Sign Up" />
      </form>
    </div>
  );
}

export default SignupCol;
