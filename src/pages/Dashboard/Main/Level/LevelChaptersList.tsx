import styled from "styled-components";
import { LevelState } from "../../../../Types/layoutTypes";
import LevelChapters from "./LevelChapters";
type LevelChaptersListProps = {
  state: LevelState;
};
export default function LevelChaptersList({ state }: LevelChaptersListProps) {
  const {
    isSixiemeActive,
    isCinquiemeActive,
    isQuatriemeActive,
    isTroisiemeActive,
    isSecondeActive,
    isPremiereActive,
    isTerminaleActive,
  } = state;

  const levels = [
    { name: "sixieme", isActive: isSixiemeActive, title: "Sixieme" },
    { name: "cinquieme", isActive: isCinquiemeActive, title: "Cinquième" },
    { name: "quatrieme", isActive: isQuatriemeActive, title: "Quatrième" },
    { name: "troisieme", isActive: isTroisiemeActive, title: "Troisième" },
    { name: "seconde", isActive: isSecondeActive, title: "Seconde" },
    { name: "premiere", isActive: isPremiereActive, title: "Première" },
    { name: "terminale", isActive: isTerminaleActive, title: "Términale" },
  ];

  return (
    <LevelChaptersListStyled className="chapters-container">
      {levels.map(
        ({ name, isActive, title }, index) =>
          isActive && <LevelChapters key={index} name={name} title={title} />
      )}
    </LevelChaptersListStyled>
  );
}
const LevelChaptersListStyled = styled.div`
  /* max-width: 600px; */
  width: 100%;
  border-radius: 12px;
  /* box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1); */
`;
