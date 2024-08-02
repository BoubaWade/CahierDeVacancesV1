import styled from "styled-components";
import { datasOfChapters } from "../../data/dataLevelPages";
import { useNavigate } from "react-router-dom";
import BorderBeam from "../reusableUI/BorderBeam";

export default function Levels() {
  const navigate = useNavigate();

  return (
    <LevelsStyled>
      {datasOfChapters.map(({ id, abbrevLevel }) => (
        <div key={id}>
          <li onClick={() => navigate(`/${id}`)}>{abbrevLevel}</li>
        </div>
      ))}
      <BorderBeam className="border-beam" />
    </LevelsStyled>
  );
}
const LevelsStyled = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-around;
  position: relative;
  padding: 5px;
  li {
    position: relative;
    z-index: 30;
    font-size: 1rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: 200ms;
    &:hover {
      transform: scale(1.1);
    }
  }
  .border-beam {
    z-index: 0;
  }
  @media (max-width: 1024px) {
    li {
      font-size: 0.9rem;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
