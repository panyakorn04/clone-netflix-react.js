import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMounted from "../hooks/useMounted";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
  const { SignIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTES.BROWSE;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const mounted = useMounted();

  const isInvalid = password === "" || emailAddress === "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailAddress || !password) {
      setError((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
      return;
    }
    // your register logic here
    setIsSubmitting(true);
    SignIn(emailAddress, password)
      .then((res) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError((error) => {
          setEmailAddress("");
          setPassword("");
          setError(error.message);
        });
      })
      .finally(() => {
        mounted.current && setIsSubmitting(false);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input
              type="email"
              placeholder="Email address"
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Submit
              isLoading={isSubmitting}
              disabled={isInvalid}
              type="submit"
            >
              Sign In
            </Form.Submit>
          </Form.Base>
          {/* <button
            onClick={() =>
              signInWithGoogle()
                .then((user) => console.log(user))
                .catch((error) => console.log(error))
            }
          >
            Sign in with Google
          </button> */}
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmail>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmail>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
