import { useState } from "react";
import CalendarComponent from "../../CalendarComponent";
import PrimaryButton from "../../PrimaryButton";
import { DateValue, Exercise } from "../../../../Types/dataTypes";
import { formatDate, setLimitDateProperty } from "../../../../utils/functions";
import styled from "styled-components";

type CalendarContainerProps = {
  exercise: Exercise;
  addTodo: (exercise: Exercise) => void;
  addIsSuccessful: boolean;
};

export default function CalendarContainer({
  exercise,
  addTodo,
  addIsSuccessful,
}: CalendarContainerProps) {
  const [value, onChange] = useState<DateValue>(new Date());

  const handleAddTodo = () => {
    const deepCopyExercise = structuredClone(exercise);
    if (value) {
      setLimitDateProperty(deepCopyExercise, formatDate(value.toString()));
      addTodo(deepCopyExercise);
    }
  };
  return (
    <CalendarContainerStyled>
      <p className="text">Choisir une date</p>
      <CalendarComponent
        className="calendar"
        value={value}
        onChange={onChange}
      />
      <PrimaryButton
        id={exercise.id}
        className="add-button"
        label={!addIsSuccessful ? "Ajouter le devoir" : "Ajouté !"}
        onClick={() => handleAddTodo()}
      />
    </CalendarContainerStyled>
  );
}

const CalendarContainerStyled = styled.div`
  .text {
    text-align: center;
    color: #fff;
    font-weight: 500;
    margin: 25px auto;
  }
  .calendar {
    margin: 0 auto;
  }
  .add-button {
    display: block;
    border-radius: 5px;
    margin: 25px auto;
  }
`;
