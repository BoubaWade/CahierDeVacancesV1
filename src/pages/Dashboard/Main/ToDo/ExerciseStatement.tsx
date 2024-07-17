import styled from "styled-components";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import PreviewToDoList from "./PreviewToDoList";

type ExerciseStatementProps = {
  questionsSolutions: QuestionSolutions[];
  isCompleted: boolean;
  statements: string;
};

export default function ExerciseStatement({
  questionsSolutions,
  isCompleted,
  statements,
}: ExerciseStatementProps) {
  return (
    <ExerciseStatementStyled className="exercise-container">
      {isCompleted ? <h3>DEJÀ FAIT !</h3> : <h3>À FAIRE !</h3>}
      <h4>Aperçu de l'exércice</h4>
      <p>{statements}</p>
      <PreviewToDoList
        questionsSolutions={questionsSolutions}
        isCompleted={isCompleted}
      />
    </ExerciseStatementStyled>
  );
}
const ExerciseStatementStyled = styled.div`
  max-width: 400px;
  max-height: 450px;
  background: #f9e893;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 5px;
  overflow-y: scroll;
  h3,
  h4 {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  h3 {
    background: #000;
    font-size: 0.8rem;
    font-weight: 700;
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
  }
  p {
    font-weight: 500;
  }
`;
