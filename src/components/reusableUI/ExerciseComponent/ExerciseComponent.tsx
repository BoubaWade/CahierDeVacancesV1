import styled from "styled-components";
import { BlockMath } from "react-katex";
import { Exercise } from "../../../Types/dataTypes";
import QuestionsList from "./QuestionsList";
import BorderBeam from "../BorderBeam";

type ExerciseComponentProps = {
  exercise: Exercise;
};

export default function ExerciseComponent({
  exercise,
}: ExerciseComponentProps) {
  const { statements, questionsSolutions } = exercise;

  return (
    <ExerciseComponentStyled>
      <div className="statements">
        <BlockMath>{statements}</BlockMath>
      </div>
      <QuestionsList questionsSolutions={questionsSolutions} />
      <BorderBeam className="border-beam" />
    </ExerciseComponentStyled>
  );
}
const ExerciseComponentStyled = styled.div`
  position: relative;

  width: 80vw;
  max-width: 1300px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* border-bottom: none; */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
  /* margin: 0 10px; */
  margin-bottom: 50px;
  /* background: linear-gradient(to right, #e2e2e2, #c9d6ff); */
  background: #fff;
  /* border: 3px solid red; */
  /* z-index: 40; */
  /* overflow: auto; */
  .statements {
    /* position: relative; */
    max-width: 560px;
    min-width: 350px;
    width: 45vw;
    /* text-align: center; */
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    align-items: center;
    /* overflow-x: hidden; */
    /* padding: 0 20px; */
  }
  .border-beam {
    /* background: #fff; */
    z-index: -1;
    transform: translate(3px, -3px);
    /* border: 10px solid red; */
  }
`;
