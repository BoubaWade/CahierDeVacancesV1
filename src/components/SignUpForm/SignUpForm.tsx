import styled from "styled-components";
import PrimaryButton from "../reusableUI/PrimaryButton";
import { useRef } from "react";
import { handleSignUp } from "../../supabase/api";
import Inputs from "./Inputs";

export default function SignUpForm() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const name = nameRef.current?.value;

    if (email && password) {
      handleSignUp(email, password, name);
      formRef.current?.reset();
    } else {
      console.error("email ou mot de passe non valide");
    }
  };

  return (
    <SignUpFormStyled onSubmit={(e) => handleSubmit(e)} ref={formRef}>
      <h1>Créer un compte</h1>
      <Inputs emailRef={emailRef} passwordRef={passwordRef} nameRef={nameRef} />
      <PrimaryButton label="S'inscrire" className="connexion-button" />
    </SignUpFormStyled>
  );
}
const SignUpFormStyled = styled.form`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  width: 50%;
  h1 {
    margin-bottom: 30px;
  }
  .remember-me-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    span {
      margin: 8px 0;
    }
    input {
      width: 10%;
    }
  }
  .connexion-button {
    margin-top: 40px;
  }
`;
