import styled from "styled-components";
import { getInputsResetPasswordFields } from "../../data/datasConfig";

type InputsProps = {
  newPasswordRef: React.RefObject<HTMLInputElement>;
  confirmPasswordRef: React.RefObject<HTMLInputElement>;
  setErrorPasswordMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function Inputs({
  newPasswordRef,
  confirmPasswordRef,
  setErrorPasswordMessage,
}: InputsProps) {
  const fields = getInputsResetPasswordFields(
    newPasswordRef,
    confirmPasswordRef
  );
  return (
    <InputsStyled>
      {fields.map(({ placeholder, ref }, index) => (
        <input
          key={index}
          type="password"
          placeholder={placeholder}
          ref={ref}
          onFocus={() => setErrorPasswordMessage("")}
        />
      ))}
    </InputsStyled>
  );
}
const InputsStyled = styled.div`
  input {
    width: 100%;
    background-color: #eee;
    font-size: 13px;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    outline-color: #000;
    &:first-child {
      margin-bottom: 20px;
    }
  }
`;
