import styled from "styled-components";
import { QuestionSolutions, TableCell } from "../../../../Types/dataTypes";
import MathJaxComponent from "../../MathJaxComponent";
import SolutionComponent from "./SolutionComponent";

type QuestionsListProps = {
  questionSolution: QuestionSolutions;
  timeLeft: number;
  exerciseNumber: number;
  updateResponseScore: (scoreToAdd: number) => void;
  editTableData: TableCell[][] | undefined;
};
export default function QuestionsList({
  questionSolution,
  timeLeft,
  exerciseNumber,
  updateResponseScore,
  editTableData,
}: QuestionsListProps) {
  const { question, solution, radio, options } = questionSolution;

  const questionsToDisplay = question.slice(1, question.length);

  return (
    <QuestionsListStyled>
      {questionsToDisplay.map((line, index) => (
        <li key={index}>
          <MathJaxComponent latex={line.replace(/\\\\/g, "\\\\ ")} />
          <SolutionComponent
            solution={solution}
            timeLeft={timeLeft}
            exerciseNumber={exerciseNumber}
            questionNumber={index + 1}
            updateResponseScore={updateResponseScore}
            radio={radio}
            options={options}
            editTableData={editTableData}
          />
        </li>
      ))}
    </QuestionsListStyled>
  );
}

const QuestionsListStyled = styled.div`
  li {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
    padding-left: 5px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;
