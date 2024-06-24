import { QuestionSolutions } from "../../../../Types/dataTypes";
import styled from "styled-components";
import QuestionSolution from "./QuestionSolution";

type QuestionsListProps = {
  questionsSolutions: QuestionSolutions[];
};

export default function QuestionsList({
  questionsSolutions,
}: QuestionsListProps) {
  return (
    <QuestionsListStyled>
      {questionsSolutions.map((questionSolution, index) => (
        <QuestionSolution
          key={index}
          questionSolution={questionSolution}
          index={index}
        />
      ))}
    </QuestionsListStyled>
  );
}
const QuestionsListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
