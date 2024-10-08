import React from "react";
import Subtitle from "../../components/Subtitle";
import Container from "../../layout/Container";
import SignupCol from "./SignupCol";


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
