import styled from "styled-components";
import FormButton from "./FormButton";
import useRestPassword from "../../hooks/useRestPassword";
import Inputs from "./Inputs";

type Props = {
  setIsValidate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ResetPasswordForm({ setIsValidate }: Props) {
  const { states, setters, handleSubmit } = useRestPassword(setIsValidate);
  const { setErrorPasswordMessage } = setters;
  const {
    newPasswordRef,
    confirmPasswordRef,
    isLoading,
    errorPasswordMessage,
  } = states;

  return (
    <ResetPasswordFormStyled onSubmit={(e) => handleSubmit(e)}>
      <Inputs
        newPasswordRef={newPasswordRef}
        confirmPasswordRef={confirmPasswordRef}
        setErrorPasswordMessage={setErrorPasswordMessage}
      />
      <FormButton isLoading={isLoading} />
      <p className="empty-password">{errorPasswordMessage}</p>
    </ResetPasswordFormStyled>
  );
}
const ResetPasswordFormStyled = styled.form`
  max-width: 400px;
  min-width: 350px;
  height: 230px;
  padding: 40px 20px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  .empty-password {
    color: #fa755a;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
  }
`;
