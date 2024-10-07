import React from "react";
import LoginCol from "./LoginCol";
import Subtitle from "../../components/Subtitle";
import Container from "../../layout/Container";

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
