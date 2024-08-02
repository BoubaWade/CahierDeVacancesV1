import PrimaryButton from "../reusableUI/PrimaryButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsSignInForm } from "../../features/Sign/authSlice";
import styled from "styled-components";

export default function Buttons() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickSignInButton = () => {
    dispatch(setIsSignInForm(true));
    navigate("/sign");
  };
  const handleClickSignUpButton = () => {
    dispatch(setIsSignInForm(false));
    navigate("/sign");
  };

  return (
    <ButtonsStyled className="buttons-container">
      <PrimaryButton
        label="Connexion"
        className="button"
        onClick={() => handleClickSignInButton()}
      />
      <PrimaryButton
        label="Inscription"
        className="button signUp"
        onClick={() => handleClickSignUpButton()}
      />
    </ButtonsStyled>
  );
}
const ButtonsStyled = styled.div`
  margin-top: 60px;
  .button {
    font-size: 0.8rem;
    padding: 13px 30px;
    margin: 0 5px;
    border-color: #070d1b;
  }
  .signUp {
    background: #fff;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    .button {
      font-size: 0.7rem;
      padding: 10px 25px;
    }
  }
  @media (max-width: 425px) {
    margin-top: 30px;
    .button {
      font-size: 0.6rem;
      padding: 7px 20px;
    }
  }
  @media (max-width: 320px) {
    margin-top: 20px;
    .button {
      font-size: 0.5rem;
      padding: 7px 20px;
    }
  }
`;
