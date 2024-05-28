import styled from "styled-components";
import racine from "../../assets/racine.svg";
import infinity from "../../assets/infinity-solid.svg";
import percent from "../../assets/percent.svg";
import functionFI from "../../assets/functionFI.svg";

type SignFormRightSideProps = {
  title: string;
  text: string;
};

export default function SignFormRightSide({
  title,
  text,
}: SignFormRightSideProps) {
  return (
    <SignFormRightSideStyled>
      <div className="left">
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
          <img src={functionFI} />
          <img src={infinity} />
          <img src={percent} />
          <img src={racine} />
        </div>
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
      width: 40px;
    }
  }
`;
