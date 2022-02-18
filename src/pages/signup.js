import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { useAuth } from "../context/AuthContext";
import useMounted from "../hooks/useMounted";

export default function SignUp() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const mounted = useMounted();

  const isInvalid = password === "" || emailAddress === "";

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base
            onSubmit={async (e) => {
              e.preventDefault();
              if (!emailAddress || !password) {
                setError((error) => {
                  setFirstName("");
                  setEmailAddress("");
                  setPassword("");
                  setError(error.message);
                });
                return;
              }
              // your register logic here
              setIsSubmitting(true);
              register(emailAddress, password)
                .then((response) => {})
                .catch((error) => {
                  console.log(error.message);
                  setError((error) => {
                    setFirstName("");
                    setEmailAddress("");
                    setPassword("");
                    setError(error.message);
                  }).then(() => {
                    navigate(ROUTES.BROWSE);
                  });
                })
                .finally(() => {
                  mounted.current && setIsSubmitting(false);
                });
            }}
            method="POST"
          >
            <Form.Input
              placeholder="first name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email Address"
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
            />
            <Form.Input
              type="password"
              placeholder="password"
              value={password}
              autoComplete="off"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-up"
              isLoading={isSubmitting}
            >
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmail>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmail>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
