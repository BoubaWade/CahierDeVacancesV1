import Latex from "react-latex";
import QuestionsList from "./QuestionsList";
import { QuestionSolutions } from "../../../Types/dataTypes";
import styled from "styled-components";

type MainExerciseProps = {
  statements: string;
  questionsSolutions: QuestionSolutions[];
};

export default function MainExercise({
  statements,
  questionsSolutions,
}: MainExerciseProps) {
  return (
    <MainExerciseStyled>
      <h3>
        <Latex>{statements}</Latex>
      </h3>
      <QuestionsList questionsSolutions={questionsSolutions} />
    </MainExerciseStyled>
  );
}
const MainExerciseStyled = styled.div`
  width: 100%;
  /* position: sticky; */
  overflow-y: scroll;
  border-radius: 0 0 10px 10px;
  padding-top: 40px;
  h3 {
    min-width: 350px;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 400;
    padding: 10px;
    margin: 0 5px;
    border-bottom: none;
  }
`;
