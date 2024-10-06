import React from "react";
import Container from "../components/Container";
import Subtitle from "../components/Subtitle";
import SignupCol from "../components/SignupCol";


function SignupPage() {
  return (
    <>
      <Container>
        <SignupCol/>
      </Container>
      <Subtitle page="signup"/>
    </>
  );
}

export default SignupPage;
