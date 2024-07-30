import styled from "styled-components";
import { useState } from "react";
import ResetPasswordForm from "./ResetPasswordForm";

export default function ResetPassword() {
  const [isValidate, setIsValidate] = useState(false);

  return (
    <ResetCredentialsStyled>
      <h1>Mettre à jour votre mot de passe</h1>
      {!isValidate ? (
        <ResetPasswordForm setIsValidate={setIsValidate} />
      ) : (
        <p>Nouveau mot de passe enregistré !</p>
      )}
    </ResetCredentialsStyled>
  );
}

const ResetCredentialsStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 22px;
    margin-bottom: 50px;
  }
`;
