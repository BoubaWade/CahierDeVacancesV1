import MathKeyboard from "../../MathKeyboard";
import SolutionComponent from "./SolutionComponent";
import { QuestionSolutions } from "../../../Types/dataTypes";
import styled from "styled-components";
import ExercisePlayer from "../ExercisePlayer";
import Latex from "react-latex";

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
            <p style={{ fontSize: "0.9rem" }}>
              <Latex>{question}</Latex>
            </p>
            <MathKeyboard />
            <SolutionComponent solution={solution} />
          </div>
          <div className="player-container">
            <ExercisePlayer time={time} />
          </div>
        </div>
      ))}
    </QuestionsListStyled>
  );
}
const QuestionsListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .exercise-container {
    display: flex;
    flex-grow: 1;
    padding: 5px;
    border-radius: 15px;
    max-width: 620px;
    &:nth-child(even) {
      flex-direction: row-reverse;
      .player-container {
        border-right: none;
      }
    }
    &:nth-child(odd) {
      .player-container {
        border-left: none;
      }
    }
    .exercise-statement {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 15px;
      border-radius: 10px;
      border: 1px dashed #888;
    }
    .player-container {
      background: linear-gradient(to right, #fde047, #c2a205);
      border-radius: 10px;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #000;
    }
  }
`;
