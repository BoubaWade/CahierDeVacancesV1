import { useDispatch } from "react-redux";
import backward from "../../assets/icons/backward.svg";
import PrimaryButton from "../reusableUI/PrimaryButton";
import { setIsPasswordRecovery } from "../../features/Sign/authSlice";
import { useRef } from "react";
import { passwordRecovery } from "../../supabase/api";
import styled from "styled-components";
import Image from "../reusableUI/Image";

type Props = {
  setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PasswordRecoveryForm({ setConfirmation }: Props) {
  const emailRef = useRef<HTMLInputElement | null>(null);
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
    <PasswordRecoveryFormStyled>
      <Image
        src={backward}
        className="return"
        onClick={() => dispatch(setIsPasswordRecovery(false))}
      />
      <h3 className="title">Récupérer votre mot de passe</h3>
      <input type="email" placeholder="Entrer votre email" ref={emailRef} />
      <PrimaryButton
        label="Valider"
        className="recovery-button"
        onClick={handleRecoveryPassword}
      />
    </PasswordRecoveryFormStyled>
  );
}

const PasswordRecoveryFormStyled = styled.div`
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
    margin: 18px 0;
    padding: 10px 15px;
    border-radius: 8px;
    outline: none;
  }
  .recovery-button {
    display: block;
    width: 140px;
    margin: 10px auto;
  }
`;
