import styled from "styled-components";
import BorderBeam from "../BorderBeam";
import CardTop from "./CardTop";
import CardBottom from "./CardBottom";
import { lessonCard } from "../../../Types/layoutTypes";
import CardButtons from "../LevelHome/Main/CardButtons";

type LessonCardProps = {
  lesson: lessonCard;
  id: string;
};

export default function LessonCard({ lesson, id }: LessonCardProps) {
  const { title, level, duration, tag, stars, lessonId } = lesson;
  return (
    <LessonCardStyled>
      <CardTop title={title} level={level} duration={duration} />
      <CardBottom tag={tag} stars={stars} />
      <BorderBeam className="border-beam" size={100} />
      <CardButtons lessonId={lessonId} id={id} />
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
