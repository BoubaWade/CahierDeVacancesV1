import { useRef, useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../reusableUI/PrimaryButton";
import { passwordRecovery } from "../../supabase/api";

export default function PasswordRecovery() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [confirmation, setConfirmation] = useState(false);

  const handleRecoveryPassword = async () => {
    const email = emailRef.current?.value;
    if (email) {
      try {
        passwordRecovery(email);
        setConfirmation(true);
        setTimeout(() => {
          setConfirmation(false);
        }, 3000);
      } catch (error) {
        console.error("error", error);
        setConfirmation(false);
      }
    }
  };

  return (
    <PasswordRecoveryStyled>
      {!confirmation ? (
        <>
          <h3>Récupérer votre mot de passe</h3>
          <input type="email" placeholder="Entrer votre email" ref={emailRef} />
          <PrimaryButton
            label="Valider"
            onClick={handleRecoveryPassword}
            className="recovery-button"
          />
        </>
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
  h3 {
    margin-bottom: 20px;
  }
  .recovery-button {
    width: 140px;
    margin: 10px auto;
  }
`;
