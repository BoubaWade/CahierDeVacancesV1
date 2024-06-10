import styled from "styled-components";
import ExerciseHeader from "./ExerciseHeader";
import MainExercise from "./MainExercise";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Exercise } from "../../../../Types/dataTypes";
import { RootState } from "../../../../app/store";
import useExercise from "../../../../hooks/useExercise";
import { setIncompletedProperty } from "../../../../utils/utilsFunctions";
import { addToDoExercise } from "../../../../features/Dashboard/dashboardSlice";
import PrimaryButton from "../../PrimaryButton";
import SecondaryButton from "../../SecondaryButton";
import Modal from "../../Modal/Modal";
import CalendarComponent from "../../CalendarComponent";
import BorderBeam from "../../BorderBeam";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    isOpenModal,
    setIsOpenModal,
    addIsSuccessful,
    value,
    onChange,
    addTodo,
  } = useExercise();

  if (!isActive) return null;

  const handleAddTodo = () => {
    // const currentExercise = getCurrentExercise(exercises, id);
    addTodo(exercise);
  };

  const handleValidateExercise = () => {
    const todoFinded = toDoExercises?.find((todo) => todo.id === id);
    const deepCopyToDoFinded = structuredClone(todoFinded);

    if (deepCopyToDoFinded) {
      setIncompletedProperty(deepCopyToDoFinded, true);
      dispatch(addToDoExercise(deepCopyToDoFinded));
    } else {
      // const currentExercise = getCurrentExercise(exercises, id);
      const deepCopyCurrentExercise = structuredClone(exercise);

      // if (deepCopyCurrentExercise) {
      setIncompletedProperty(deepCopyCurrentExercise, true);
      dispatch(addToDoExercise(deepCopyCurrentExercise));
      // }
    }
  };

  return (
    <ExerciseComponentStyled>
      <PrimaryButton
        label="retour au tableau de bord"
        className="return-dashboard-button"
        onClick={() => navigate("/dashboard")}
      />
      <ExerciseHeader
        number={number}
        displayNextExercise={displayNextExercise}
        displayPreviousExercise={displayPreviousExercise}
      />
      <SecondaryButton
        label={`Ajouter à " DEVOIR À FAIRE "`}
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
        label="Valider l'éxercice"
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
  .return-dashboard-button {
    margin-top: 0;
    margin-bottom: 20px;
  }
  .add-todo-button {
    background-color: #201f1fe7;
    font-weight: 500;
    margin-top: 20px;
    border-radius: 5px;
    padding-left: 15px;
    padding-right: 15px;
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
