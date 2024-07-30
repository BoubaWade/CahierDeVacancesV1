import styled from "styled-components";
import SignInWithGoogle from "../SignInFormContainer/SignInWithGoogle";
import Badges from "./Badges";

type Props = {
  title: string;
  text: string;
};

export default function SignFormRightSide({ title, text }: Props) {
  return (
    <SignFormRightSideStyled>
      <div className="container">
        <h1>{title}</h1>
        <p className="text">{text}</p>
        <Badges />
        <SignInWithGoogle />
      </div>
    </SignFormRightSideStyled>
  );
}
const SignFormRightSideStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-radius: 30px 0 0 30px;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: linear-gradient(to right, #fde047, #c2a205);
    .text {
      font-size: 0.9rem;
      font-weight: 500;
      text-align: center;
      margin: 20px 0;
      padding: 20px;
    }
  }
`;
