import styled from "styled-components";

type InputsProps = {
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
  passwordRef: React.MutableRefObject<HTMLInputElement | null>;
  setErrorCredentials: React.Dispatch<React.SetStateAction<string>>;
};

export default function Inputs({
  emailRef,
  passwordRef,
  setErrorCredentials,
}: InputsProps) {
  const fields = [
    { type: "email", placeholder: "Email", ref: emailRef },
    { type: "password", placeholder: "Mot de passe", ref: passwordRef },
  ];
  return (
    <InputsPropsStyled>
      {fields.map(({ type, placeholder, ref }, index) => (
        <input
          key={index}
          className="input"
          type={type}
          placeholder={placeholder}
          ref={ref}
          onChange={() => setErrorCredentials("")}
        />
      ))}
    </InputsPropsStyled>
  );
}
const InputsPropsStyled = styled.div`
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
