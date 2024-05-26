import styled from "styled-components";
import CardTop from "../../../components/reusableUI/LessonCard/CardTop";
import CardBottom from "../../../components/reusableUI/LessonCard/CardBottom";
import LessonCard from "../../../components/reusableUI/LessonCard/LessonCard";

type lesson = {
  title: string;
  level: string;
  duration: string;
  tag: string;
  stars: string[];
};
type MainProps = {
  lessons: lesson[] | undefined;
};

export default function Main({ lessons }: MainProps) {
  return (
    <MainStyled>
      <div className="cards-container">
        {lessons?.map(({ title, level, duration, tag, stars }, index) => (
          <LessonCard key={index}>
            <CardTop title={title} level={level} duration={duration} />
            <CardBottom tag={tag} stars={stars} />
          </LessonCard>
        ))}
      </div>
    </MainStyled>
  );
}
const MainStyled = styled.main`
  background-color: #f8f8fa;
  padding: 50px 0;
  .cards-container {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px 20px;
    margin: 0 auto;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
  }
`;
