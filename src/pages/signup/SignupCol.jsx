import React, { useState } from "react";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

function SignupCol() {
  // const [userName,setUserName]=useState();
  // const [email,setEmail]=useState();
  // const [password,setPassword]=useState();

  const [userInfo, setUserInfo] = useState({});

  const handleOnChange = (e) => {
    const id = e.target.id;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setUserInfo((prevState) => ({ ...prevState, [id]: value }));

  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log("usename:", userName);
    // console.log("email:", email);
    // console.log("password:", password);
    console.log("userInfo:", userInfo);
  };

  return (
    <div className="form-section form-right">
      <h3>Sign Up</h3>
      <form id="sign-up-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          id="username"
          label="Username"
          placeholder="Enter your username"
          onChange={handleOnChange}
        />
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
        <Checkbox

          id="remember"
          label="Remember Password"
          onChange={handleOnChange}
        />
        <Button label="Sign Up" />
      </form>
    </div>
  );
}

export default SignupCol;
