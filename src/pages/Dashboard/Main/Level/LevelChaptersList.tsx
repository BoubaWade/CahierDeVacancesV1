import styled from "styled-components";
import { LevelState } from "../../../../Types/layoutTypes";
import LevelChapters from "./LevelChapters";
type LevelChaptersListProps = {
  state: LevelState;
};
export default function LevelChaptersList({ state }: LevelChaptersListProps) {
  const {
    isCm2Active,
    isTroisiemeActive,
    isPremiereActive,
    isTerminaleActive,
  } = state;

  const levels = [
    { name: "cm2", isActive: isCm2Active, title: "CM2" },
    { name: "troisieme", isActive: isTroisiemeActive, title: "Troisième" },
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
const LevelChaptersListStyled = styled.div``;
