import styled from "styled-components";
import racine from "../../assets/racine.svg";
import infinity from "../../assets/infinity-solid.svg";
import percent from "../../assets/percent.svg";
import functionFI from "../../assets/functionFI.svg";
import SignInWithGoogle from "../SignInForm/SignInWithGoogle";

type Props = {
  title: string;
  text: string;
};

export default function SignFormRightSide({ title, text }: Props) {
  const imgFields = [functionFI, infinity, percent, racine];

  return (
    <SignFormRightSideStyled>
      <div className="left">
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
          {imgFields.map((imgField, index) => (
            <img key={index} src={imgField} />
          ))}
        </div>
        <p className="or"> OU</p>
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
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: linear-gradient(to right, #fde047, #c2a205);
    p {
      font-size: 0.9rem;
      font-weight: 500;
      text-align: center;
      margin: 20px 0;
      padding: 20px;
    }
    img {
      width: 35px;
      margin: 0 3px;
    }
  }
`;
