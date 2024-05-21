import styled from "styled-components";
import ExerciseComponent from "../../components/reusableUI/ExerciseComponent/ExerciseComponent";
import { exercises } from "../../Datas/Troisieme/exercises";

export default function ExercisesList() {
  return (
    <ExercisesListStyled>
      <div>
        {exercises.map((exercise, index) => (
          <ExerciseComponent key={index} exercise={exercise} />
        ))}
      </div>
    </ExercisesListStyled>
  );
}
const ExercisesListStyled = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #7d7b7b20; */
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
`;
