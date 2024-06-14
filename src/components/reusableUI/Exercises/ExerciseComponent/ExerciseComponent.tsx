import { useSelector } from "react-redux";
import styled from "styled-components";
import { DateValue, Exercise } from "../../../../Types/dataTypes";
import { RootState } from "../../../../app/store";
import useExercise from "../../../../hooks/useExercise";
import {
  formatDate,
  setIncompletedProperty,
  setLimitDateProperty,
} from "../../../../utils/utilsFunctions";
import BorderBeam from "../../BorderBeam";
import CalendarComponent from "../../CalendarComponent";
import Modal from "../../Modal/Modal";
import PrimaryButton from "../../PrimaryButton";
import SecondaryButton from "../../SecondaryButton";
import ExerciseHeader from "./ExerciseHeader";
import MainExercise from "./MainExercise";
import { useState } from "react";

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
  const { id, number, statements, questionsSolutions } = exercise;
  const { toDoExercises } = useSelector((state: RootState) => state.dashboard);
  const [value, onChange] = useState<DateValue>(new Date());
  const { isOpenModal, setIsOpenModal, addIsSuccessful, addTodo } =
    useExercise();

  if (!isActive) return null;

  const handleAddTodo = () => {
    const deepCopyExercise = structuredClone(exercise);
    if (value) {
      setLimitDateProperty(deepCopyExercise, formatDate(value.toString()));
      addTodo(deepCopyExercise);
    }
  };

  const handleValidateExercise = () => {
    const todoFinded = toDoExercises?.find((todo) => todo.id === id);
    const deepCopyToDoFinded = structuredClone(todoFinded);

    if (deepCopyToDoFinded) {
      setIncompletedProperty(deepCopyToDoFinded, true);
      addTodo(deepCopyToDoFinded);
    } else {
      const deepCopyCurrentExercise = structuredClone(exercise);

      setIncompletedProperty(deepCopyCurrentExercise, true);
      addTodo(deepCopyCurrentExercise);
    }
  };

  return (
    <ExerciseComponentStyled>
      <ExerciseHeader
        number={number}
        displayNextExercise={displayNextExercise}
        displayPreviousExercise={displayPreviousExercise}
      />
      <SecondaryButton
        label={`Ajouter à : DEVOIR À FAIRE `}
        className="add-todo-button"
        onClick={() => setIsOpenModal(true)}
      />
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <p className="text-date-choice">Choisir une date</p>
        <CalendarComponent
          className="calendar"
          value={value}
          onChange={onChange}
        />
        <PrimaryButton
          id={id}
          className="add-button"
          label={!addIsSuccessful ? "Valider" : "Ajouté ✅"}
          onClick={() => handleAddTodo()}
        />
      </Modal>
      <MainExercise
        statements={statements}
        questionsSolutions={questionsSolutions}
      />
      <SecondaryButton
        id={id}
        label={!addIsSuccessful ? "Valider l'éxercice" : "Ajouté ✅"}
        className="validate-exercise-button"
        onClick={() => handleValidateExercise()}
      />
      <BorderBeam className="border-beam" />
    </ExerciseComponentStyled>
  );
}
const ExerciseComponentStyled = styled.div`
  position: relative;
  width: 90vw;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  margin-bottom: 50px;
  background-color: #f8f8fa;
  .add-todo-button {
    background-color: #201f1fe7;
    font-size: 0.7rem;
    font-weight: 500;
    margin-top: 20px;
    border-radius: 5px;
    padding: 7px 10px;
    &:hover {
      background-color: #fff;
    }
  }
  .text-date-choice {
    color: #fff;
    font-weight: 500;
    margin: 25px auto;
  }
  .calendar {
    margin: 0 auto;
  }
  .add-button {
    width: 150px;
    border-radius: 5px;
    margin: 25px auto;
  }
  .validate-exercise-button {
    background-color: #201f1fe7;
    position: relative;
    font-weight: 500;
    border-radius: 5px;
    margin: 70px 0 20px;
    font-size: 0.9rem;
    padding: 8px 20px;
    &:hover {
      background-color: #fff;
    }
  }
  .border-beam {
    z-index: -1;
    transform: translate(3px, -3px);
  }
`;
