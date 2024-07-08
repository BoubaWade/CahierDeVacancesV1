import { useState } from "react";
import { useSelector } from "react-redux";
import {
  updateUserEmail,
  updateUserName,
  updateUserPassword,
} from "../../../../supabase/api";
import { RootState } from "../../../../app/store";
import UpdateButton from "./UpdateButton";
import styled from "styled-components";

export default function SettingsForm() {
  const { user } = useSelector((state: RootState) => state.auth);
  const [nameValue, setNameValue] = useState<string>(user?.user_metadata?.name);
  const [emailValue, setEmailValue] = useState<string>(
    user?.user_metadata?.email
  );
  const [passwordValue, setPasswordValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const name = user.user_metadata.name;
      const email = user.user_metadata.email;
      if (nameValue !== name) updateUserName(nameValue);
      if (emailValue !== email) updateUserEmail(emailValue);
      if (passwordValue) updateUserPassword(passwordValue);
      setConfirmed(true);
      setTimeout(() => {
        setConfirmed(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setConfirmed(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SettingsFormStyled onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
      </div>
      {!confirmed ? (
        <UpdateButton isLoading={isLoading} />
      ) : (
        <p className="confirm-message">Modifications enregistrées !</p>
      )}
    </SettingsFormStyled>
  );
}

const SettingsFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  min-width: 350px;
  height: 320px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  div {
    width: 100%;
    label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      text-align: left;
    }
    input {
      box-sizing: border-box;
      width: 100%;
      padding: 8px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: white;
      margin-bottom: 15px;
      color: #595858;
      outline-color: #fa755a;
    }
  }
  .submit-button {
    margin-top: 20px;
    padding: 7px 20px;
    border-radius: 5px;
  }
  .confirm-message {
    font-size: 15px;
    margin-top: 20px;
  }
`;
