import { BlockMath } from "react-katex";
import MathKeyboard from "../../MathKeyboard";
import SolutionComponent from "./SolutionComponent";
import { QuestionSolutions } from "../../../Types/dataTypes";
import styled from "styled-components";

type QuestionsListProps = {
  questionsSolutions: QuestionSolutions[];
};

export default function QuestionsList({
  questionsSolutions,
}: QuestionsListProps) {
  return (
    <QuestionsListStyled>
      {questionsSolutions.map(({ question, solution }, index) => (
        <div key={index}>
          <BlockMath>{question}</BlockMath>
          <MathKeyboard />
          <SolutionComponent solution={solution} />
        </div>
      ))}
    </QuestionsListStyled>
  );
}
const QuestionsListStyled = styled.div``;
