import styled from "styled-components";
import { datas } from "../../data/datasHomePages";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Main from "./Main/Main";

export default function LevelHome() {
  const { id } = useParams();
  const dataFiltered = datas.find((data) => data.id === id);

  return (
    <LevelHomeStyled>
      <Header level={dataFiltered?.level} />
      <Main lessons={dataFiltered?.lessons} />
    </LevelHomeStyled>
  );
}
const LevelHomeStyled = styled.div`
  overflow-x: hidden;
`;
