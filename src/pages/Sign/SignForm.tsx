import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function SignForm() {
  const { isSignInForm } = useSelector((state: RootState) => state.auth);

  return (
    <SignFormStyled>{isSignInForm ? <SignIn /> : <SignUp />}</SignFormStyled>
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
