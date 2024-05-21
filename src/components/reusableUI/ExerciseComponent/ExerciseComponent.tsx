import styled from "styled-components";
import { BlockMath } from "react-katex";
import { Exercise } from "../../../Types/dataTypes";
import QuestionsList from "./QuestionsList";

type ExerciseComponentProps = {
  exercise: Exercise;
};

export default function ExerciseComponent({
  exercise,
}: ExerciseComponentProps) {
  const { statements, questionsSolutions } = exercise;

  return (
    <ExerciseComponentStyled>
      <BlockMath>{statements}</BlockMath>
      <QuestionsList questionsSolutions={questionsSolutions} />
    </ExerciseComponentStyled>
  );
}
const ExerciseComponentStyled = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-bottom: none;
`;
