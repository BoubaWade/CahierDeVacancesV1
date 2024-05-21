import styled from "styled-components";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignFormRightSide from "../../components/reusableUI/SignFormRightSide";
import PrimaryButton from "../../components/reusableUI/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <SignUpStyled>
      <PrimaryButton
        label="Retour à l'accueil"
        className="home-return"
        onClick={() => navigate("/")}
      />
      <PrimaryButton
        label="Connexion"
        className="signIn-return"
        onClick={() => navigate("/connexion")}
      />
      <div className="container">
        <SignUpForm />
        <SignFormRightSide
          title="Bienvenue !"
          text="Entrez vos coordonnées pour vous inscrire au platforme."
        />
      </div>
    </SignUpStyled>
  );
}
const SignUpStyled = styled.div`
  background-color: #c9d6ff;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  .signIn-return {
    margin-bottom: 30px;
  }
  .container {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
  }
`;
