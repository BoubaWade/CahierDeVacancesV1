import { useState } from "react";
import styled from "styled-components";
import PasswordRecoveryForm from "./PasswordRecoveryForm";

export default function PasswordRecovery() {
  const [confirmation, setConfirmation] = useState(false);

  return (
    <PasswordRecoveryStyled>
      {!confirmation ? (
        <PasswordRecoveryForm setConfirmation={setConfirmation} />
      ) : (
        <p>Vérifier dans votre boite mail !</p>
      )}
    </PasswordRecoveryStyled>
  );
}

const PasswordRecoveryStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
