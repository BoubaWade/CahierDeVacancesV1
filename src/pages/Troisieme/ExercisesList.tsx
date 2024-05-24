import styled from "styled-components";
import ExerciseComponent from "../../components/reusableUI/ExerciseComponent/ExerciseComponent";
import { exercises } from "../../Datas/Troisieme/exercises";

export default function ExercisesList() {
  return (
    <ExercisesListStyled>
      {exercises.map((exercise, index) => (
        <ExerciseComponent key={index} exercise={exercise} />
      ))}
    </ExercisesListStyled>
  );
}
const ExercisesListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
