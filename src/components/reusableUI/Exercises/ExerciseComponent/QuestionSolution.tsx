import Latex from "react-latex";
import SolutionComponent from "./SolutionComponent";
import styled from "styled-components";
import { useState } from "react";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import MathKeyboard from "../../../MathKeyboard";
import ExercisePlayer from "../../ExercisePlayer";

type Props = {
  questionSolution: QuestionSolutions;
};

export default function QuestionSolution({ questionSolution }: Props) {
  const { question, solution, time } = questionSolution;
  const totalTime = time;
  const [timeLeft, setTimeLeft] = useState(totalTime);

  return (
    <QuestionSolutionStyled>
      <div className="exercise-statement">
        <p style={{ fontSize: "1rem", fontWeight: "400", lineHeight: "25px" }}>
          {question.map((line, index) => (
            <span
              key={index}
              style={{ display: "block", marginBottom: "10px" }}
            >
              <Latex>{line}</Latex>
            </span>
          ))}
        </p>
        <MathKeyboard />
        <SolutionComponent solution={solution} timeLeft={timeLeft} />
      </div>
      <div className="player-container">
        <ExercisePlayer
          totalTime={totalTime}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
      </div>
    </QuestionSolutionStyled>
  );
}
const QuestionSolutionStyled = styled.div`
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
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
  }
`;
