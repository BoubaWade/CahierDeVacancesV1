import styled from "styled-components";
import SignFormRightSide from "../../components/reusableUI/SignFormRightSide";
import SignInFormContainer from "../../components/SignInFormContainer/SignInFormContainer";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function SignForm() {
  const { isSignInForm } = useSelector((state: RootState) => state.auth);

  return (
    <SignFormStyled>
      {isSignInForm ? (
        <>
          <SignInFormContainer />
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
    </SignFormStyled>
  );
}
const SignFormStyled = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;
