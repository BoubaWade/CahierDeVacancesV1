import styled from "styled-components";
import Latex from "react-latex";
import { Exercise, DateValue } from "../../../Types/dataTypes";
import QuestionsList from "./QuestionsList";
import BorderBeam from "../BorderBeam";
import ExerciseHeader from "./ExerciseHeader";
import SecondaryButton from "../SecondaryButton";
import Modal from "../Modal/Modal";
import CalendarComponent from "../CalendarComponent";
import { useState } from "react";
import { exercises } from "../../../Datas/Troisieme/exercises";
import { addToDoExercise } from "../../../features/Dashboard/dashboardSlice";
import { useDispatch } from "react-redux";
import PrimaryButton from "../PrimaryButton";
import { formatDate } from "../../../utils/utilsFunctions";

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

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [addIsSuccessful, setAddIsSuccessful] = useState(false);
  const dispatch = useDispatch();
  const [value, onChange] = useState<DateValue>(new Date());

  if (!isActive) {
    return null;
  }

  const getCurrentExercise = (id: string) => {
    return exercises.find((exercise) => exercise.id === id);
  };

  const handleAddTodo = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const exercise = getCurrentExercise(e.currentTarget.id);
    const deepCopyExercise = structuredClone(exercise);

    if (deepCopyExercise && value) {
      for (let key in deepCopyExercise) {
        if (key === "limitDate") {
          deepCopyExercise[key] = formatDate(value.toString());
        }
      }
    }
    dispatch(addToDoExercise(deepCopyExercise));
    setAddIsSuccessful(true);

    setTimeout(() => {
      setIsOpenModal(false);
      setAddIsSuccessful(false);
    }, 1000);
  };

  return (
    <ExerciseComponentStyled>
      <ExerciseHeader
        number={number}
        displayNextExercise={displayNextExercise}
        displayPreviousExercise={displayPreviousExercise}
      />
      <SecondaryButton
        label={`Ajouter à "Devoir à faire"`}
        className="add-todo-button"
        onClick={() => setIsOpenModal(true)}
      />
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <CalendarComponent
          className="calendar"
          value={value}
          onChange={onChange}
        />
        <PrimaryButton
          id={id}
          label={!addIsSuccessful ? "Valider" : "Ajouté !"}
          onClick={(e) => handleAddTodo(e)}
        />
      </Modal>

      <div className="main">
        <h3>
          <Latex>{statements}</Latex>
        </h3>
        <QuestionsList questionsSolutions={questionsSolutions} />
      </div>
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
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .calendar {
  }
  .main {
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding-top: 40px;
    h3 {
      min-width: 350px;
      display: flex;
      justify-content: center;
      font-size: 1.1rem;
      font-weight: 400;
      padding: 10px;
      margin: 0 5px;
      border-bottom: none;
    }
  }
  .border-beam {
    z-index: -1;
    transform: translate(3px, -3px);
  }
`;
