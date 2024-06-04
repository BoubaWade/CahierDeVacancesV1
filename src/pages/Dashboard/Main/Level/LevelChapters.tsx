import styled from "styled-components";
import { datas } from "../../../../data/dataLevelPages";

type LevelChaptersProps = {
  name: string;
  title: string;
};

export default function LevelChapters({ name, title }: LevelChaptersProps) {
  const getChaptersOfLevel = (level: string) => {
    const levelDatas = datas.filter((data) => data.id === level);
    const chapters = levelDatas
      .map((data) => data.lessons)[0]
      .map((data) => data.title);
    return chapters;
  };

  return (
    <LevelChaptersStyled>
      {/* <div className={`chapters-${name}`} key={name}> */}
      <h2>les chapitres</h2>
      <h3>{title}</h3>
      <ul>
        {getChaptersOfLevel(name).map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
      {/* </div> */}
    </LevelChaptersStyled>
  );
}
const LevelChaptersStyled = styled.div`
  background: #f1f2f3;
  /* background: rgba(0, 0, 0, 0.9); */

  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 25px;
  border-radius: 12px;
  h2 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 600;
  }
  h3 {
    background: linear-gradient(to right, #fde047, #c2a205);
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    padding: 5px 0;
    margin-bottom: 10px;
    border-radius: 12px;
  }
  ul {
    /* color: #fff; */
    /* color: #f8f8fa; */

    li {
      font-size: 0.9rem;

      list-style-type: disc;
      padding: 5px;
    }
  }
`;
