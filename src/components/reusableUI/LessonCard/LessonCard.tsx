import styled from "styled-components";
import BorderBeam from "../BorderBeam";
import CardTop from "./CardTop";
import CardBottom from "./CardBottom";
import CardButtons from "../../../pages/LevelHome/Main/CardButtons";
import { lessonCard } from "../../../Types/layoutTypes";

type LessonCardProps = {
  lesson: lessonCard;
};

export default function LessonCard({ lesson }: LessonCardProps) {
  const { title, level, duration, tag, stars, lessonId } = lesson;
  return (
    <LessonCardStyled>
      <CardTop title={title} level={level} duration={duration} />
      <CardBottom tag={tag} stars={stars} />
      <BorderBeam className="border-beam" size={100} />
      <CardButtons lessonId={lessonId} />
    </LessonCardStyled>
  );
}
const LessonCardStyled = styled.article`
  position: relative;
  min-width: 300px;
  border-radius: 15px;
  .border-beam {
    transform: translate(2px, -2px);
    z-index: -1;
  }
`;
