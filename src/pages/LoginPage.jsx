import React from "react";
import LoginCol from "../components/LoginCol";
import Subtitle from "../components/Subtitle";
import Container from "../components/Container";

function LoginPage() {
  return (
    <>
      <Container>
        <LoginCol/>
      </Container>
      <Subtitle page="login"/>
    </>
  );
}

export default LoginPage;
