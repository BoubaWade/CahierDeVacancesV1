import styled from "styled-components";
import logo from "../../../public/logo.png";
import Image from "../reusableUI/Image";
import Buttons from "./Buttons";

export default function TitleContainer() {
  return (
    <TitleContainerStyled>
      <Image src={logo} className="logo" />
      <h1>
        Rejoindre
        <br /> <span> Les mathématiques de Math.Max </span> <br />
        c'est préparer votre avenir avec sérénité !
      </h1>
      <Buttons />
    </TitleContainerStyled>
  );
}
const TitleContainerStyled = styled.div`
  background-color: #000205;
  height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    position: relative;
    width: 100px;
  }
  h1 {
    width: 70%;
    font-weight: 500;
    font-size: 1.3rem;
    text-align: center;
    position: relative;
    line-height: 50px;
    span {
      color: #fde047;
      font-size: 3rem;
      font-weight: 700;
    }
  }
  @media (max-width: 957px) {
    h1 {
      font-size: 1.2rem;
      span {
        font-size: 2.5rem;
      }
    }
  }
  @media (max-width: 768px) {
    .logo {
      width: 80px;
    }
    h1 {
      font-size: 1.1rem;
      line-height: 45px;
      span {
        font-size: 2.1rem;
      }
    }
  }
  @media (max-width: 580px) {
    h1 {
      font-size: 0.9rem;
      line-height: 35px;
      span {
        font-size: 1.7rem;
      }
    }
  }
  @media (max-width: 425px) {
    .logo {
      width: 70px;
    }
    h1 {
      font-size: 0.8rem;
      line-height: 30px;
      span {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 0.75rem;
      span {
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 0.7rem;
      line-height: 25px;
      span {
        font-size: 1.1rem;
      }
    }
  }
`;
