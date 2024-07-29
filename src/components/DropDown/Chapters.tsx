import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { normalizeString } from "../../utils/functions";
import styled from "styled-components";

export default function Chapters() {
  const { level, chaptersOfLevel } = useSelector(
    (state: RootState) => state.dashboard
  );
  const navigate = useNavigate();

  const handleNavigate = (chapter: string) => {
    navigate(
      `/${normalizeString(level)}/exercices/${normalizeString(chapter)}`
    );
  };

  return (
    <ChaptersStyled>
      {chaptersOfLevel.map((chapter, index) => (
        <p key={index} onClick={() => handleNavigate(chapter)}>
          {index + 1}. {chapter}
        </p>
      ))}
    </ChaptersStyled>
  );
}
const ChaptersStyled = styled.div`
  p {
    width: 100%;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: #c2a205;
    }
  }
`;
