import styled from "styled-components";
import Astro from "../../../assets//astro.png";
import { datasOfChapters } from "../../../data/dataLevelPages";
import Header from "./Header";
import Main from "./Main/Main";
import { useState } from "react";
import { normalizeString } from "../../../utils/utilsFunctions";

type LevelHomeProps = {
  id: string;
};
export default function LevelHome({ id }: LevelHomeProps) {
  const [searchValue, setSearchValue] = useState("");

  const dataFinded = datasOfChapters?.find((data) => data.id === id);
  const dataFiltered = dataFinded?.lessons.filter((data) =>
    normalizeString(data.title).includes(normalizeString(searchValue))
  );
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <LevelHomeStyled>
      <Header
        level={dataFinded?.level}
        searchValue={searchValue}
        onChangeValue={handleSearchChange}
      />
      <Main lessons={dataFiltered} id={id} />
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
