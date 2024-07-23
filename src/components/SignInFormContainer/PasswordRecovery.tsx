import { useRef, useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../reusableUI/PrimaryButton";
import { passwordRecovery } from "../../supabase/api";
import backward from "../../assets/icons/backward.svg";
import { useDispatch } from "react-redux";
import { setIsPasswordRecovery } from "../../features/Sign/authSlice";

export default function PasswordRecovery() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [confirmation, setConfirmation] = useState(false);
  const dispatch = useDispatch();

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
          <img
            src={backward}
            className="return"
            onClick={() => dispatch(setIsPasswordRecovery(false))}
          />
          <h3 className="title">Récupérer votre mot de passe</h3>
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
  .return {
    width: 22px;
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }
  .title {
    margin-bottom: 20px;
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
  .recovery-button {
    width: 140px;
    margin: 10px auto;
  }
`;
