import styled from "styled-components";
import Astro from "../../assets//astro.png";
import { datas } from "../../data/dataLevelPages";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Main from "./Main/Main";

export default function LevelHome() {
  const { id } = useParams();
  const dataFiltered = datas?.find((data) => data.id === id);

  return (
    <LevelHomeStyled>
      <Header level={dataFiltered?.level} />
      <Main lessons={dataFiltered?.lessons} />
      <img src={Astro} />
    </LevelHomeStyled>
  );
}
const LevelHomeStyled = styled.div`
  overflow-x: hidden;
  img {
    display: block;
    position: fixed;
    width: 40vw;
    min-width: 400px;
    top: 0;
    bottom: 0;
    left: 0;
  }
`;
