import { QuestionSolutions } from "../../../../Types/dataTypes";
import styled from "styled-components";
import ExercisesList from "./ExercisesList";

type MainExerciseProps = {
  level: string;
  statements: string;
  questionsSolutions: QuestionSolutions[];
};

export default function MainExercise({
  level,
  statements,
  questionsSolutions,
}: MainExerciseProps) {
  return (
    <MainExerciseStyled>
      {statements && <p className="statement">{statements}</p>}
      <ExercisesList questionsSolutions={questionsSolutions} level={level} />
    </MainExerciseStyled>
  );
}
const MainExerciseStyled = styled.div`
  width: 100%;
  /* position: sticky; */
  overflow-y: scroll;
  border-radius: 0 0 10px 10px;
  padding-top: 30px;
  .statement {
    min-width: 350px;
    max-width: 90%;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;
    padding: 10px;
    margin: 10px auto;
    border-bottom: none;
  }
`;
