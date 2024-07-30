import styled, { keyframes } from "styled-components";
import LessonsList from "./LessonsList";
import { Lesson } from "../../../../Types/dataTypes";
import EmptyResult from "../../EmptyResult";

type MainProps = {
  lessons: Lesson[] | undefined;
  id: string;
};

export default function Main({ lessons, id }: MainProps) {
  const hasALength = lessons?.length !== 0;
  if (!lessons) return;

  return (
    <MainStyled>
      <div className="cards-container">
        {hasALength ? (
          <LessonsList lessons={lessons} id={id} />
        ) : (
          <EmptyResult text="Pas de chapitre(s) trouvé(s)" />
        )}
      </div>
    </MainStyled>
  );
}

const animCard = keyframes`
0%{
  opacity: 0;
  transform:translateY(100px)
}
30%{
  opacity: 0.3;

}
60%{
  opacity: 0.6;

}
100%{
  opacity:1 ;
  transform:translateY(0)

} 
`;

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
    animation: ${animCard} 500ms ease;
  }
`;
