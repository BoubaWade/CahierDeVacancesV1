import styled from "styled-components";
import RememberMe from "./RememberMe";
import PrimaryButton from "../reusableUI/PrimaryButton";
import useSignIn from "../../hooks/useSignIn";
import Inputs from "./Inputs";
import ForgetPassword from "./ForgetPassword";

export default function SignInForm() {
  const { states, setters, handlers } = useSignIn();
  const { errorCredentials, rememberMe, emailRef, passwordRef } = states;
  const { setErrorCredentials, setRememberMe } = setters;
  const { handleSignIn } = handlers;

  return (
    <SignInFormStyled onSubmit={(e) => handleSignIn(e)}>
      <h1>Connectez-vous</h1>
      <span className="text">Connexion avec email et mot de passe</span>
      <Inputs
        emailRef={emailRef}
        passwordRef={passwordRef}
        setErrorCredentials={setErrorCredentials}
      />
      <RememberMe
        emailRef={emailRef}
        passwordRef={passwordRef}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
      />
      <PrimaryButton label="Se connecter" className="submit-button" />
      {errorCredentials && <span className="error">{errorCredentials}</span>}
      <ForgetPassword />
    </SignInFormStyled>
  );
}
const SignInFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 30px;
  }
  .text {
    font-size: 12px;
    margin-bottom: 15px;
  }
  .submit-button {
    margin-bottom: 15px;
  }
  .error {
    display: block;
    color: red;
    font-size: 12px;
    font-weight: 500;
    margin: 0 auto;
  }
`;
