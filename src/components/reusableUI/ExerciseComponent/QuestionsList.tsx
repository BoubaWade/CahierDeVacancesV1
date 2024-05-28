import { BlockMath, InlineMath } from "react-katex";
import MathKeyboard from "../../MathKeyboard";
import SolutionComponent from "./SolutionComponent";
import { QuestionSolutions } from "../../../Types/dataTypes";
import styled from "styled-components";
import ExercisePlayer from "../ExercisePlayer";

type QuestionsListProps = {
  questionsSolutions: QuestionSolutions[];
};

export default function QuestionsList({
  questionsSolutions,
}: QuestionsListProps) {
  return (
    <QuestionsListStyled>
      {questionsSolutions.map(({ question, solution, time }, index) => (
        <div key={index} className="exercise-container">
          <div className="exercise-statement">
            <BlockMath math={question} />
            <MathKeyboard />
            <SolutionComponent solution={solution} />
          </div>
          <div className="player-container">
            <ExercisePlayer
              time={time}
              // displayNextExercise={displayNextExercise}
              // displayPreviousExercise={displayPreviousExercise}
            />
          </div>
        </div>
      ))}
    </QuestionsListStyled>
  );
}
const QuestionsListStyled = styled.div`
  width: 100%;

  .exercise-container {
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    padding: 20px;
    background-color: #f3ebbf;
    /* border-bottom: 1px dashed red; */
    border-bottom: 1px dashed #888;
    border-radius: 15px;
    /* border-radius: 0 0 15px 15px; */

    .exercise-statement {
      width: calc(100% - 200px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .player-container {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
