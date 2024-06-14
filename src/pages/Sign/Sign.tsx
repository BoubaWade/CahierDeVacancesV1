import styled from "styled-components";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import SignFormRightSide from "../../components/reusableUI/SignFormRightSide";
import PrimaryButton from "../../components/reusableUI/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { BackgroundHome } from "../../components/BackgroundHome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setIsSignInForm } from "../../features/Sign/authSlice";

export default function Sign() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSignInForm } = useSelector((state: RootState) => state.auth);

  return (
    <SignStyled>
      <PrimaryButton
        label="Retour à l'accueil"
        className="home-return"
        onClick={() => navigate("/")}
      />
      <PrimaryButton
        label={isSignInForm ? "inscription" : "Connexion"}
        className="switch-button"
        onClick={() => dispatch(setIsSignInForm(!isSignInForm))}
      />
      <div className="background-filter"></div>
      <BackgroundHome />
      <div className="container">
        {isSignInForm ? (
          <>
            <SignInForm />
            <SignFormRightSide
              title="Mathématiques !"
              text="Les maths, c'est comme le sport : plus tu en fais, plus tu deviens fort."
            />
          </>
        ) : (
          <>
            <SignUpForm />
            <SignFormRightSide
              title="Confiance !"
              text="La confiance, c'est comme un chemin : plus tu avances, plus tu vas loin."
            />
          </>
        )}
      </div>
    </SignStyled>
  );
}
const SignStyled = styled.div`
  background-color: #000205;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  .home-return,
  .switch-button {
    background-color: #fff;
    border: none;
    &:hover {
      background: linear-gradient(to right, #fde047, #c2a205);
    }
  }
  .switch-button {
    margin-bottom: 30px;
  }
  .home-return {
    margin-top: 30px;
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
