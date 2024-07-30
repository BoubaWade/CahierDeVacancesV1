import styled from "styled-components";
import { getInputsSignUpFields } from "../../data/datasConfig";

type InputsProps = {
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
  passwordRef: React.MutableRefObject<HTMLInputElement | null>;
  nameRef: React.MutableRefObject<HTMLInputElement | null>;
};
export default function Inputs({
  emailRef,
  passwordRef,
  nameRef,
}: InputsProps) {
  const fields = getInputsSignUpFields(emailRef, passwordRef, nameRef);

  return (
    <InputsStyled>
      {fields.map((field, index) => (
        <input
          key={index}
          className="input"
          type={field.type}
          placeholder={field.placeholder}
          ref={field.ref}
        />
      ))}
    </InputsStyled>
  );
}
const InputsStyled = styled.div`
  .input {
    width: 100%;
    background-color: #eee;
    font-size: 13px;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    border-radius: 8px;
    outline: none;
  }
`;
