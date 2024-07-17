import styled from "styled-components";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import { getImgUrl } from "../../../../utils/utilsFunctions";
import QuestionsList from "./QuestionsList";

type ExerciseStatementProps = {
  exerciseNumber: number;
  questionSolution: QuestionSolutions;
  timeLeft: number;
  handleUpdateScore: (scoreToAdd: number) => void;
};

export default function ExerciseStatement({
  exerciseNumber,
  questionSolution,
  timeLeft,
  handleUpdateScore,
}: ExerciseStatementProps) {
  const { question, imgName } = questionSolution;
  const imageUrl = getImgUrl(imgName);

  return (
    <ExerciseStatementStyled>
      <ul>
        <span className="exercise-number">Exercice {exerciseNumber}</span>
        {imageUrl && <img src={imageUrl} className="graphic" />}
        {question[0] && <li className="first-question-item">{question[0]}</li>}
        <QuestionsList
          questionSolution={questionSolution}
          timeLeft={timeLeft}
          exerciseNumber={exerciseNumber}
          updateResponseScore={handleUpdateScore}
        />
      </ul>
    </ExerciseStatementStyled>
  );
}
const ExerciseStatementStyled = styled.div`
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  border: 1.5px dashed #888;
  border-bottom: none;
  ul {
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 25px;
    .exercise-number {
      display: inline-block;
      background: #c2a205;
      margin: -15px auto 20px;
      padding: 0 10px;
      border-radius: 3px;
    }
    .graphic {
      min-width: 250px;
      width: 60%;
      display: block;
      margin: 0 auto 30px;
    }
    .first-question-item {
      margin: 0 0 30px;
      font-weight: 500;
      font-size: 0.9rem;
      background: #cacfd7;
      padding: 10px;
      border-radius: 7px;
    }
  }
`;
