import styled from "styled-components";
import PrimaryButton from "../../components/reusableUI/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { BackgroundHome } from "../../components/BackgroundHome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setIsSignInForm } from "../../features/Sign/authSlice";
import SignForm from "./SignForm";

export default function Sign() {
  const { isSignInForm } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <SignForm />
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
  .home-return,
  .switch-button {
    background-color: #fff;
    font-size: 0.7rem;
    border: none;
    padding: 6px 20px;
    border-radius: 3px;
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
`;
