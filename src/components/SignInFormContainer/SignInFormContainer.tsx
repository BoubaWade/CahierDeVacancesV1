import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import PasswordRecovery from "./PasswordRecovery";
import SignInForm from "./SignInForm";

export default function SignInFormContainer() {
  const { isPasswordRecovery } = useSelector((state: RootState) => state.auth);

  return (
    <SignInFormContainerStyled>
      {!isPasswordRecovery ? <SignInForm /> : <PasswordRecovery />}
    </SignInFormContainerStyled>
  );
}
const SignInFormContainerStyled = styled.div`
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
`;
