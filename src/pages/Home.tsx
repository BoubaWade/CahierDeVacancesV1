import styled from "styled-components";
import Navigation from "../components/Navigation/Navigation";
import MainHome from "../components/MainHome/MainHome";
import { BackgroundHome } from "../components/BackgroundHome";

export default function Home() {
  return (
    <HomeStyled>
      <div className="background-filter"></div>
      <BackgroundHome
        rowClassName="row"
        columnClassName="column"
        svgClassName="svg"
      />
      <Navigation />
      <MainHome />
    </HomeStyled>
  );
}
const HomeStyled = styled.div`
  /* background-color: #000205; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  border-radius: 0.5rem;
  .row,
  .column {
    border: none;
    &:nth-child(even) {
      box-shadow: 2px 2px 5px #4b3f05;
    }
  }
  .row,
  .column {
    &:nth-child(odd) {
      box-shadow: 2px 2px 5px #373636;
    }
  }
`;
