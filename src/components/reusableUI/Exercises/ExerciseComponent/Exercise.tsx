import styled from "styled-components";
import { useState } from "react";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import ExercisePlayer from "../../ExercisePlayer";
import ExerciseStatement from "./ExerciseStatement";

type ExerciseProps = {
  questionSolution: QuestionSolutions;
  exerciseNumber: number;
  handleUpdateScore: (scoreToAdd: number) => void;
};

export default function Exercise({
  questionSolution,
  exerciseNumber,
  handleUpdateScore,
}: ExerciseProps) {
  const totalTime = questionSolution.time;
  const [timeLeft, setTimeLeft] = useState(totalTime);

  return (
    <ExerciseStyled>
      <ExerciseStatement
        exerciseNumber={exerciseNumber}
        questionSolution={questionSolution}
        timeLeft={timeLeft}
        handleUpdateScore={handleUpdateScore}
      />
      <div className="player-container">
        <ExercisePlayer
          totalTime={totalTime}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
      </div>
    </ExerciseStyled>
  );
}
const ExerciseStyled = styled.div`
  flex-grow: 1;
  border-radius: 15px;
  max-width: 600px;
  min-width: 450px;
  .player-container {
    background: linear-gradient(to right, #fde047, #c2a205);
    border-radius: 10px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    border: 1.5px dashed #888;
  }
`;
