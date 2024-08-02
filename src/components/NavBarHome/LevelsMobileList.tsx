import styled from "styled-components";
import { datasOfChapters } from "../../data/dataLevelPages";
import { useNavigate } from "react-router-dom";

export default function LevelsMobileList() {
  const navigate = useNavigate();

  return (
    <LevelsMobileListStyled>
      {datasOfChapters.map(({ id, abbrevLevel }, index) => (
        <li key={index} onClick={() => navigate(`/${id}`)}>
          {abbrevLevel}
        </li>
      ))}
    </LevelsMobileListStyled>
  );
}
const LevelsMobileListStyled = styled.ul`
  position: absolute;
  margin-top: 40px;
  li {
    margin: 4px 0;
    padding: 3px 15px 3px 0;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
  @media (max-width: 580px) {
    li {
      font-size: 0.85rem;
      margin: 3px 0;
    }
  }
`;
