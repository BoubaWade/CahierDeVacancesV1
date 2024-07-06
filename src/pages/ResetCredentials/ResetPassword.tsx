import styled from "styled-components";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MiniLoader from "../../components/reusableUI/MiniLoader";
import SecondaryButton from "../../components/reusableUI/SecondaryButton";
import { updateUserPassword } from "../../supabase/api";

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const newPassword = newPasswordRef?.current?.value;
      const confirmPassword = confirmPasswordRef?.current?.value;
      if (newPassword !== confirmPassword) {
        setErrorPasswordMessage("Les deux champs doivent être identiques !");
        return;
      }
      if (newPassword) {
        await updateUserPassword(newPassword);
        setIsValidate(true);
        setTimeout(() => {
          setIsValidate(false);
          navigate("/sign");
        }, 2000);
      }
      if (newPassword?.length === 0) {
        setErrorPasswordMessage(`Le champs " nouveau mot de passe " est vide.`);
      }
    } catch (error) {
      console.log(error);
      setIsValidate(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <ResetCredentialsStyled>
      <h1>Mettre à jour votre mot de passe</h1>
      {!isValidate ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            ref={newPasswordRef}
            onFocus={() => setErrorPasswordMessage("")}
          />
          <input
            type="password"
            placeholder="Confirmer votre nouveau mot de passe"
            ref={confirmPasswordRef}
            onFocus={() => setErrorPasswordMessage("")}
          />
          {!isLoading ? (
            <SecondaryButton
              label="Valider les modifications"
              className="submit-button"
            />
          ) : (
            <MiniLoader />
          )}
          <p className="empty-password">{errorPasswordMessage}</p>
        </form>
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
  form {
    max-width: 400px;
    min-width: 350px;
    height: 220px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    input {
      width: 100%;
      background-color: #eee;
      font-size: 13px;
      border: none;
      margin-bottom: 25px;
      padding: 10px 15px;
      border-radius: 5px;
      outline-color: #000;
      &:first-child {
        margin-bottom: 20px;
      }
    }
    .submit-button {
      display: block;
      margin-top: 20px;
      margin: 0 auto;
      padding: 7px 20px;
      border-radius: 5px;
    }
    .empty-password {
      color: #fa755a;
      font-size: 13px;
      font-weight: 500;
      text-align: center;
      margin-top: 10px;
    }
  }
`;
