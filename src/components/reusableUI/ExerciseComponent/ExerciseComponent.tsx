import styled from "styled-components";
import Latex from "react-latex";
import { Exercise } from "../../../Types/dataTypes";
import QuestionsList from "./QuestionsList";
import BorderBeam from "../BorderBeam";
import ExerciseHeader from "./ExerciseHeader";
import SecondaryButton from "../SecondaryButton";

type ExerciseComponentProps = {
  exercise: Exercise;
  isActive: boolean;
  displayNextExercise: () => void;
  displayPreviousExercise: () => void;
};

export default function ExerciseComponent({
  exercise,
  isActive,
  displayNextExercise,
  displayPreviousExercise,
}: ExerciseComponentProps) {
  const { number, statements, questionsSolutions } = exercise;

  if (!isActive) {
    return null;
  }

  return (
    <ExerciseComponentStyled>
      <ExerciseHeader
        number={number}
        displayNextExercise={displayNextExercise}
        displayPreviousExercise={displayPreviousExercise}
      />
      <SecondaryButton
        label={` Ajouter à " Devoir à faire " `}
        className="add-todo-button"
      />
      <div className="main">
        <h3>
          <Latex>{statements}</Latex>
        </h3>
        <QuestionsList questionsSolutions={questionsSolutions} />
      </div>
      <BorderBeam className="border-beam" />
    </ExerciseComponentStyled>
  );
}
const ExerciseComponentStyled = styled.div`
  position: relative;
  width: 90vw;
  /* max-width: 1300px; */
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  margin-bottom: 50px;
  background-color: #f8f8fa;
  .add-todo-button {
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .main {
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding-top: 40px;
    h3 {
      min-width: 350px;
      display: flex;
      justify-content: center;
      font-size: 1.1rem;
      font-weight: 400;
      padding: 10px;
      margin: 0 5px;
      border-bottom: none;
    }
  }
  .border-beam {
    z-index: -1;
    transform: translate(3px, -3px);
  }
`;
