import { BlockMath } from "react-katex";
import MathKeyboard from "../../MathKeyboard";
import SolutionComponent from "./SolutionComponent";
import { QuestionSolutions } from "../../../Types/dataTypes";

type QuestionsListProps = {
  questionsSolutions: QuestionSolutions[];
};

export default function QuestionsList({
  questionsSolutions,
}: QuestionsListProps) {
  return (
    <div>
      {questionsSolutions.map(({ question, solution }, index) => (
        <div key={index}>
          <BlockMath>{question}</BlockMath>
          <MathKeyboard />
          <SolutionComponent solution={solution} />
        </div>
      ))}
    </div>
  );
}
