import styled from "styled-components";
import Navigation from "../components/Navigation/Navigation";
import MainHome from "../components/MainHome/MainHome";
import { BackgroundHome } from "../components/BackgroundHome";

export default function Home() {
  return (
    <HomeStyled>
      <div className="background-filter"></div>
      <BackgroundHome />
      <Navigation />
      <MainHome />
    </HomeStyled>
  );
}
const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;
