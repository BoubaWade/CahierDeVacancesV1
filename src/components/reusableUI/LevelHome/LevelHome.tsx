import styled from "styled-components";
import Astro from "../../../assets//astro.png";
import { datasOfChapters } from "../../../data/dataLevelPages";
import Header from "./Header";
import Main from "./Main/Main";

type LevelHomeProps = {
  id: string;
};
export default function LevelHome({ id }: LevelHomeProps) {
  const dataFiltered = datasOfChapters?.find((data) => data.id === id);

  return (
    <LevelHomeStyled>
      <Header level={dataFiltered?.level} />
      <Main lessons={dataFiltered?.lessons} id={id} />
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
