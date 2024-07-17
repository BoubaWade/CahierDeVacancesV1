import { useState } from "react";
import {
  formatDate,
  setLimitDateProperty,
} from "../../../../utils/utilsFunctions";
import CalendarComponent from "../../CalendarComponent";
import NotSubscribedMessage from "../../NotSubscribedMessage";
import PrimaryButton from "../../PrimaryButton";
import { DateValue, Exercise } from "../../../../Types/dataTypes";
import styled from "styled-components";

type ModalContentProps = {
  exercise: Exercise;
  isSubsribted: boolean;
  addIsSuccessful: boolean;
  addTodo: (exercise: Exercise) => void;
};

export default function ModalContent({
  exercise,
  addTodo,
  isSubsribted,
  addIsSuccessful,
}: ModalContentProps) {
  const [value, onChange] = useState<DateValue>(new Date());

  const handleAddTodo = () => {
    const deepCopyExercise = structuredClone(exercise);
    if (value) {
      setLimitDateProperty(deepCopyExercise, formatDate(value.toString()));
      addTodo(deepCopyExercise);
    }
  };

  return (
    <ModalContentStyled>
      {isSubsribted ? (
        <>
          <p className="text-date-choice">Choisir une date</p>
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
        </>
      ) : (
        <NotSubscribedMessage />
      )}
    </ModalContentStyled>
  );
}
const ModalContentStyled = styled.div`
  margin: 0 auto;
  .text-date-choice {
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
