import styled from "styled-components";
import Astro from "../../../assets//astro.png";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { useState } from "react";
import {
  filterLessonsBySearch,
  findLevelDataById,
} from "../../../utils/functions";
import { datasOfChapters } from "../../../data/dataLevelPages";
import Image from "../Image";

type LevelHomeProps = {
  id: string;
};

export default function LevelHome({ id }: LevelHomeProps) {
  const [searchValue, setSearchValue] = useState("");

  const dataFinded = findLevelDataById(datasOfChapters, id);
  if (!dataFinded) return;
  const lessons = filterLessonsBySearch(dataFinded?.lessons, searchValue);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <LevelHomeStyled>
      <Header
        level={dataFinded.level}
        searchValue={searchValue}
        onChangeValue={handleSearch}
      />
      <Main lessons={lessons} id={id} />
      <Image src={Astro} className="astro" />
    </LevelHomeStyled>
  );
}
const LevelHomeStyled = styled.div`
  overflow-x: hidden;
  .astro {
    display: block;
    position: fixed;
    width: 40vw;
    min-width: 400px;
    top: 0;
    bottom: 0;
    left: 0;
  }
`;
