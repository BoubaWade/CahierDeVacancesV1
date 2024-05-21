import styled from "styled-components";

export default function SignFormRightSide({ title, text }) {
  return (
    <SignFormRightSideStyled>
      <div className="left">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {/* <FontAwesomeIcon icon="fa-solid fa-infinity" />
      <FontAwesomeIcon icon="fa-solid fa-square-root-variable" /> */}
      {/* <img src="../../assets/racine.svg" /> */}
      {/* <div>
        <img src="/public/images/infinity-solid.svg" />
        <img src="../../assets/infinity-solid.svg" />
        <img src="../../assets/percent.svg" />
        <img src="../../assets/functionFI.svg" />
      </div> */}
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
    background: linear-gradient(to right, #6c389c, #4d088e);
    color: #fff;
    p {
      font-size: 0.9rem;
      text-align: center;
      margin: 20px 0;
      padding: 20px;
    }
  }
  img {
    width: 100px;
  }
`;
