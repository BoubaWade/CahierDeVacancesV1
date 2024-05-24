import styled from "styled-components";
import PrimaryButton from "../reusableUI/PrimaryButton";

export default function SignUpForm() {
  return (
    <SignUpFormStyled>
      <h1>Créer un compte</h1>
      <input type="text" placeholder="Nom" />
      <input type="text" placeholder="Prénom" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Mot de passe" />
      <PrimaryButton
        label="S'inscrire"
        className="connexion-button"
        onClick={() => {}}
      />
    </SignUpFormStyled>
  );
}
const SignUpFormStyled = styled.form`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  width: 50%;
  h1 {
    margin-bottom: 30px;
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
  .remember-me-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    span {
      margin: 8px 0;
    }
    input {
      width: 10%;
    }
  }
  .connexion-button {
    margin-top: 40px;
  }
`;
