import styled from "styled-components";
import ExerciseComponent from "../../components/reusableUI/ExerciseComponent/ExerciseComponent";
import { exercises } from "../../Datas/Troisieme/exercises";
import { useState } from "react";

export default function ExercisesList() {
  const [activeIndex, setActiveIndex] = useState(0);

  const displayNextExercise = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % exercises.length);
  };

  const displayPreviousExercise = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? exercises.length - 1 : prevIndex - 1
    );
  };

  return (
    <ExercisesListStyled>
      {exercises.map((exercise, index) => (
        <ExerciseComponent
          key={index}
          exercise={exercise}
          isActive={index === activeIndex}
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
