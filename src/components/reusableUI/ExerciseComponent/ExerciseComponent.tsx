import styled from "styled-components";
import { BlockMath, InlineMath } from "react-katex";
import Latex from "react-latex";
import { Exercise } from "../../../Types/dataTypes";
import QuestionsList from "./QuestionsList";
import BorderBeam from "../BorderBeam";
import ExercisePlayer from "../ExercisePlayer";
import ExerciseHeader from "./ExerciseHeader";
// import { useState } from "react";

type ExerciseComponentProps = {
  exercise: Exercise;
  isActive: boolean;
  displayNextExercise: () => void;
  displayPreviousExercise: () => void;
};

export default function ExerciseComponent({
  exercise,
  isActive,
  displayNextExercise,
  displayPreviousExercise,
}: ExerciseComponentProps) {
  const { number, statements, questionsSolutions } = exercise;
  // const [toggleExercise, setToggleExercise] = useState(false);

  // const handleToggleExercise = (toggled: boolean) => {
  //   setToggleExercise(toggled);
  // };
  if (!isActive) {
    return null;
  }

  return (
    <ExerciseComponentStyled>
      <ExerciseHeader
        number={number}
        displayNextExercise={displayNextExercise}
        displayPreviousExercise={displayPreviousExercise}
      />
      {/* <h3>Exercice {number}</h3> */}

      {/* {toggleExercise && ( */}
      <div className="main">
        {/* <div className="statements"> */}
        {/* <BlockMath>{statements}</BlockMath> */}
        <h3>
          <Latex>
            {statements}
            {/* Calucler cette éxpression : $(3\times 4) \div (5-3)$ Calucler
              cette éxpression : $(3\times 4) \div (5-3)$Calucler cette
              éxpression : $(3\times 4) \div (5-3)$Calucler cette éxpression :
              $(3\times 4) \div (5-3)$ */}
          </Latex>
          {/* <Latex>Calucler cette éxpression : $(3\times 4) \div (5-3)$</Latex>
            <Latex>Calucler cette éxpression : $(3\times 4) \div (5-3)$</Latex>
            <Latex>Calucler cette éxpression : $(3\times 4) \div (5-3)$</Latex>
            <Latex>Calucler cette éxpression : $(3\times 4) \div (5-3)$</Latex> */}
        </h3>
        {/* <h4>
          <Latex displayMode={true}>
            Montre l'expression suivante: $$\sqrt4+4\sqrt4 \ \le \ \ x^2+2$$
            Calucler cette éxpression $$(3\times 4) \div (5-3)$$
          </Latex>
        </h4> */}
        {/* </div> */}
        <QuestionsList questionsSolutions={questionsSolutions} />
        {/* <ExercisePlayer
          time={time}
          displayNextExercise={displayNextExercise}
          displayPreviousExercise={displayPreviousExercise}
        /> */}
      </div>
      {/* )} */}
      <BorderBeam className="border-beam" />
    </ExerciseComponentStyled>
  );
}
const ExerciseComponentStyled = styled.div`
  position: relative;
  width: 90vw;
  max-width: 1300px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* border-bottom: none; */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  /* margin: 0 10px; */
  margin-bottom: 50px;
  /* background: linear-gradient(to right, #e2e2e2, #c9d6ff); */
  background: #fff;
  /* border: 3px solid red; */
  /* z-index: 40; */
  /* overflow: auto; */
  .main {
    width: 100%;
    background-color: #f8f8fa;
    border-radius: 15px;
    h3 {
      /* position: sticky; */
      /* width: 100%; */
      /* background-color: #f8f8fa; */
      /* border-radius: 15px 15px 0 0; */

      /* max-width: 70vw; */
      min-width: 350px;
      /* width: 80%; */
      /* border: 1px solid red; */
      /* text-align: center; */
      display: flex;
      justify-content: center;
      /* align-items: center; */
      font-weight: 400;
      margin-bottom: 20px;
      padding: 10px;
      /* flex-wrap: wrap; */
      /* word-wrap: break-word; */

      /* white-space: wrap; */
      /* justify-content: flex-start; */
      /* align-items: center; */
      /* overflow-x: hidden; */
      /* padding: 0 20px; */
      /* h3 {
        font-weight: 500;
        margin-bottom: 50px;
      } */
    }
  }
  .border-beam {
    /* background: #fff; */
    z-index: -1;
    transform: translate(3px, -3px);
    /* border: 10px solid red; */
  }
`;
