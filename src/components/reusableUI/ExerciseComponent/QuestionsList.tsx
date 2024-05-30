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
  .exercise-container {
    width: 100%;
    display: flex;
    padding: 5px;
    border-radius: 15px;
    .exercise-statement {
      width: calc(100% - 200px);
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
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #000;
      border-left: none;
    }
    .difficulty {
      width: 40px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: #fff;
        background-color: #000;
      }
      span {
        font-size: 1rem;
        display: inline-block;
        transform: rotate(-90deg);
      }
    }
  }
`;
