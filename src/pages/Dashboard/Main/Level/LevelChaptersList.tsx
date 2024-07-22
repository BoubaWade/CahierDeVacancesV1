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
    { name: "Sixième", isActive: isSixiemeActive },
    { name: "Cinquième", isActive: isCinquiemeActive },
    { name: "Quatrième", isActive: isQuatriemeActive },
    { name: "Troisième", isActive: isTroisiemeActive },
    { name: "Seconde", isActive: isSecondeActive },
    { name: "Première", isActive: isPremiereActive },
    { name: "Términale", isActive: isTerminaleActive },
  ];

  return (
    <LevelChaptersListStyled className="chapters-container">
      {levels.map(
        ({ name, isActive }, index) =>
          isActive && <LevelChapters key={index} name={name} />
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
