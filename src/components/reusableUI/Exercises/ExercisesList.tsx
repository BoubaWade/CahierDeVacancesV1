import styled from "styled-components";
import { Exercise } from "../../../Types/dataTypes";
import ExerciseComponent from "./ExerciseComponent/ExerciseComponent";
import { useDispatch, useSelector } from "react-redux";
import { setActiveExercise } from "../../../features/Exercises/exercisesSlice";
import { RootState } from "../../../app/store";

type ExercisesListProps = {
  exercises: Exercise[];
};

export default function ExercisesList({ exercises }: ExercisesListProps) {
  const { activeExercise } = useSelector((state: RootState) => state.exercises);
  const dispatch = useDispatch();

  const displayNextExercise = () => {
    dispatch(setActiveExercise((activeExercise + 1) % exercises.length));
  };

  const displayPreviousExercise = () => {
    dispatch(
      setActiveExercise(
        activeExercise === 0 ? exercises.length - 1 : activeExercise - 1
      )
    );
  };

  return (
    <ExercisesListStyled>
      {exercises.map((exercise, index) => (
        <ExerciseComponent
          key={index}
          exercise={exercise}
          isActive={index === activeExercise}
          displayNextExercise={displayNextExercise}
          displayPreviousExercise={displayPreviousExercise}
        />
      ))}
    </ExercisesListStyled>
  );
}
const ExercisesListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
