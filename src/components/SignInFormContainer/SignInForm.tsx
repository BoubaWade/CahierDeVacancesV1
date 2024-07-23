import styled from "styled-components";
import RememberMe from "./RememberMe";
import PrimaryButton from "../reusableUI/PrimaryButton";
import { setIsPasswordRecovery } from "../../features/Sign/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import useSignIn from "../../hooks/useSignIn";

export default function SignInForm() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    emailRef,
    passwordRef,
    rememberMe,
    setRememberMe,
    handleSignIn,
    errorCredentials,
    setErrorCredentials,
  } = useSignIn();

  return (
    <SignInFormStyled onSubmit={(e) => handleSignIn(e)}>
      <h1>Connectez-vous</h1>
      <span className="text">Connexion avec email et mot de passe</span>
      <input
        type="email"
        placeholder="Email"
        ref={emailRef}
        onChange={() => setErrorCredentials("")}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        ref={passwordRef}
        onChange={() => setErrorCredentials("")}
      />
      <RememberMe
        emailRef={emailRef}
        passwordRef={passwordRef}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
      />
      <PrimaryButton label="Se connecter" className="connexion-button" />
      {errorCredentials && <span className="error">{errorCredentials}</span>}
      <span
        className="forget-password"
        onClick={() => dispatch(setIsPasswordRecovery(true))}
      >
        Mot de passe oublié ?
      </span>
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
  input {
    width: 100%;
    background-color: #eee;
    font-size: 13px;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    border-radius: 8px;
    outline: none;
  }
  .connexion-button {
    margin-bottom: 15px;
  }
  .error {
    display: block;
    color: red;
    font-size: 12px;
    font-weight: 500;
    margin: 0 auto;
  }
  .forget-password {
    display: block;
    font-size: 12px;
    margin: 25px auto 0;
    cursor: pointer;
  }
`;
