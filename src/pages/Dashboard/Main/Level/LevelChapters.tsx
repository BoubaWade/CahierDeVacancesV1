import styled from "styled-components";
import { datasOfChapters } from "../../../../data/dataLevelPages";
import { getChaptersOfLevel } from "../../../../utils/utilsFunctions";
type LevelChaptersProps = {
  name: string;
  title: string;
};

export default function LevelChapters({ name, title }: LevelChaptersProps) {
  return (
    <LevelChaptersStyled>
      <h2>les chapitres</h2>
      <h3>{title}</h3>
      <ul>
        {getChaptersOfLevel(datasOfChapters, name).map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
    </LevelChaptersStyled>
  );
}
const LevelChaptersStyled = styled.div`
  background: #fbfafa;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 25px;
  border-radius: 12px;
  h2 {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 600;
  }
  h3 {
    background: linear-gradient(to right, #fde047, #c2a205);
    text-align: center;
    width: 60%;
    font-size: 1rem;
    font-weight: 500;
    padding: 8px 0;
    border-radius: 8px;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.8);
  }
  ul {
    background: #fff;
    width: 60%;
    margin: 0 auto;
    padding: 10px;
    border: 1px dashed rgba(0, 0, 0, 0.8);
    border-top: none;
    border-radius: 8px;
    li {
      font-size: 0.9rem;
      font-weight: 500;
      padding: 5px;
    }
  }
`;
