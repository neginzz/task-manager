import React, { useState } from "react";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

function LoginCol() {

// ---------------------------- handleOnChange
  const [userInfo, setUserInfo] = useState({});

  const handleOnChange = (e) => {
    const id = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUserInfo((prevState) => ({ ...prevState, [id]: value }));
  };

// ---------------------------- handleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const responseJson = await response.json();
    // console.log('res:', responseJson);
    localStorage.setItem("token", responseJson.accessToken);

  };

  return (
    <div className="form-section form-right">
      <h3>Login</h3>
      <form id="sign-in-form" onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="m@example.com"
          onChange={handleOnChange}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          placeholder="Enter your password"
          onChange={handleOnChange}
        />
        <Checkbox id="remember" label="Remember Password" onChange={handleOnChange} />
        <Button label="Login" />
      </form>
    </div>
  );
}

export default LoginCol;
