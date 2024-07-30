import { useState } from "react";
import { useSelector } from "react-redux";
import {
  updateUserEmail,
  updateUserName,
  updateUserPassword,
} from "../../../../supabase/api";
import { RootState } from "../../../../app/store";
import styled from "styled-components";
import Inputs from "./Inputs";
import ButtonContainer from "./ButtonContainer";

export default function SettingsForm() {
  const { user } = useSelector((state: RootState) => state.auth);
  const [formState, setFormState] = useState({
    name: user?.user_metadata?.name || "",
    email: user?.user_metadata?.email || "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { name, email, password } = formState;
    try {
      const userName = user.user_metadata.name;
      const userEmail = user.user_metadata.email;
      if (name !== userName) updateUserName(name);
      if (email !== userEmail) updateUserEmail(email);
      if (password) updateUserPassword(password);
      setConfirmed(true);
      setTimeout(() => {
        setConfirmed(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setConfirmed(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SettingsFormStyled onSubmit={(e) => handleSubmit(e)}>
      <Inputs formState={formState} setFormState={setFormState} />
      <ButtonContainer isLoading={isLoading} confirmed={confirmed} />
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
`;
