import styled from "styled-components";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import { getImgUrl } from "../../../../utils/functions";
import QuestionsList from "./QuestionsList";
import Header from "./Header";

type ExerciseStatementProps = {
  level: string;
  exerciseNumber: number;
  questionSolution: QuestionSolutions;
  timeLeft: number;
  handleUpdateScore: (scoreToAdd: number) => void;
};

export default function ExerciseStatement({
  level,
  exerciseNumber,
  questionSolution,
  timeLeft,
  handleUpdateScore,
}: ExerciseStatementProps) {
  const { question, imgName, editTableData } = questionSolution;
  const imageUrl = getImgUrl(level, imgName);

  return (
    <ExerciseStatementStyled>
      <ul>
        <span className="exercise-number">Exercice {exerciseNumber}</span>
        <Header editTableData={editTableData} imageUrl={imageUrl} />
        {question[0] && <li className="first-question-item">{question[0]}</li>}
        <QuestionsList
          questionSolution={questionSolution}
          timeLeft={timeLeft}
          exerciseNumber={exerciseNumber}
          updateResponseScore={handleUpdateScore}
          editTableData={editTableData}
        />
      </ul>
    </ExerciseStatementStyled>
  );
}
const ExerciseStatementStyled = styled.div`
  background: #fff;
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
