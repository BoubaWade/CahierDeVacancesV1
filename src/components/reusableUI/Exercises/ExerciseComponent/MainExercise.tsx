import QuestionsList from "./QuestionsList";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import styled from "styled-components";
import { useEffect } from "react";

type MainExerciseProps = {
  statements: string;
  questionsSolutions: QuestionSolutions[];
};

export default function MainExercise({
  statements,
  questionsSolutions,
}: MainExerciseProps) {
  // useEffect(()=>{
  //   if(typeof window?.MathJax !== "undefined"){
  //     window.MathJax.typeset()
  //   }
  // },[])
  return (
    <MainExerciseStyled>
      {/* {statements && <h3>Énoncé :</h3>} */}
      {statements && <p className="statement">{statements}</p>}
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
  /* h3 {
    text-align: center;
    font-weight: 500;
  } */
  .statement {
    min-width: 350px;
    max-width: 90%;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;
    padding: 10px;
    margin: 10px auto;
    border-bottom: none;
  }
`;
