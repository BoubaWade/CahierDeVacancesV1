import styled from "styled-components";
import SignInForm from "../../components/SignInForm/SignInForm";
import SignFormRightSide from "../../components/reusableUI/SignFormRightSide";
import PrimaryButton from "../../components/reusableUI/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <SignInStyled>
      <PrimaryButton
        label="Retour à l'accueil"
        className="home-return"
        onClick={() => navigate("/")}
      />
      <PrimaryButton
        label="S'inscrire"
        className="signUp-return"
        onClick={() => navigate("/inscription")}
      />
      <div className="container">
        <SignInForm />
        <SignFormRightSide
          title="Bienvenue !"
          text="Entrez vos identifiants pour vous connectez."
        />
      </div>
    </SignInStyled>
  );
}
const SignInStyled = styled.div`
  background-color: #c9d6ff;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  .signUp-return {
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
