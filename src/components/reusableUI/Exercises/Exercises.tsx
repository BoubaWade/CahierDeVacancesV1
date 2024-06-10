import styled from "styled-components";
import ExercisesList from "./ExercisesList";
import DotPattern from "../DotPattern";
import { Exercise } from "../../../Types/dataTypes";
type ExercisesProps = {
  exercises: Exercise[];
};
export default function Exercises({ exercises }: ExercisesProps) {
  return (
    <ExercicesTroisiemeStyled>
      <h1> Exercices : {exercises[0]?.lesson}</h1>
      <ExercisesList exercises={exercises} />
      <DotPattern />
    </ExercicesTroisiemeStyled>
  );
}

const ExercicesTroisiemeStyled = styled.div`
  padding: 20px 0;
  overflow-x: hidden;
  h1 {
    font-size: 1.6rem;
    text-align: center;
    margin: 20px 0;
  }
`;
