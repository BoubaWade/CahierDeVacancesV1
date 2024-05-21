import styled from "styled-components";
import PrimaryButton from "../reusableUI/PrimaryButton";

export default function SignInForm() {
  return (
    <SignInFormStyled>
      <h1>Connectez-vous</h1>
      <span>Connexion avec email et mot de passe</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Mot de passe" />
      <div className="remember-me-container">
        <span>Se souvenir de moi</span>
        <input type="checkbox" />
      </div>
      <PrimaryButton
        label="Se connecter"
        className="connexion-button"
        onClick={() => {}}
      />
      <span>Mot de passe oublié ?</span>
    </SignInFormStyled>
  );
}
const SignInFormStyled = styled.form`
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
  span {
    font-size: 12px;
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
    margin-bottom: 30px;
  }
`;
