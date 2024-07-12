import { QuestionSolutions } from "../../../../Types/dataTypes";
import styled from "styled-components";
import Exercise from "./Exercise";
import { useState } from "react";

type ExercisesListProps = {
  questionsSolutions: QuestionSolutions[];
};

export default function ExercisesList({
  questionsSolutions,
}: ExercisesListProps) {
  const [responseScore, setResponseScore] = useState(0);

  const handleUpdateScore = (scoreToAdd: number) => {
    setResponseScore((prevScore: number) => prevScore + scoreToAdd);
  };
  localStorage.setItem("total-score", responseScore.toString());

  return (
    <ExercisesListStyled>
      {questionsSolutions.map((questionSolution, index) => (
        <Exercise
          key={index}
          questionSolution={questionSolution}
          exerciseNumber={index + 1}
          handleUpdateScore={handleUpdateScore}
        />
      ))}
    </ExercisesListStyled>
  );
}
const ExercisesListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 10px;
  row-gap: 40px;
`;
