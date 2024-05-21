import styled from "styled-components";
import backgroundImage from "../assets/school-desk-with-textbooks-near-blackboard.jpg";
import Navigation from "../components/Navigation/Navigation";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <HomeStyled>
      <img src={backgroundImage} className="background-image" />
      <Navigation />
      <Main />
    </HomeStyled>
  );
}
const HomeStyled = styled.div`
  .background-image {
    width: 100vw;
    height: 100vh;
    /* height: 700px; */
    object-fit: cover;
    position: absolute;
    z-index: -1;
    filter: brightness(10%);
  }
`;
