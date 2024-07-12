import { useSelector } from "react-redux";
import styled from "styled-components";
import { Exercise } from "../../../../Types/dataTypes";
import { RootState } from "../../../../app/store";
import useExercise from "../../../../hooks/useExercise";
import { setIncompletedProperty } from "../../../../utils/utilsFunctions";
import BorderBeam from "../../BorderBeam";
import Modal from "../../Modal/Modal";
import SecondaryButton from "../../SecondaryButton";
import ExerciseHeader from "./ExerciseHeader";
import MainExercise from "./MainExercise";
import { useState } from "react";
import { checkSubscriptionStatus } from "../../../../stripe/api";
import { getUser } from "../../../../supabase/api";
import ModalContent from "./ModalContent";

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
  const [isSubsribted, setIsSubsribted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpenModal, setIsOpenModal, addIsSuccessful, addTodo } =
    useExercise();

  if (!isActive) return null;

  const ArrayOfTotalQuestions = questionsSolutions
    .map((item) => item.question)
    .map((res) => res.length - 1);
  const totalQuestions = ArrayOfTotalQuestions.reduce(
    (curr, acc) => curr + acc
  );
  console.log(totalQuestions);

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

  const handleOpenModal = async () => {
    setIsLoading(true);
    try {
      const user = await getUser();
      if (user && user.user) {
        setIsOpenModal(true);
        const hasAccess = await checkSubscriptionStatus(user.user.id);
        setIsLoading(false);
        setIsSubsribted(hasAccess);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
        onClick={() => handleOpenModal()}
      />
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ModalContent
          exercise={exercise}
          addTodo={addTodo}
          isSubsribted={isSubsribted}
          isLoading={isLoading}
          addIsSuccessful={addIsSuccessful}
        />
      </Modal>
      <MainExercise
        statements={statements}
        questionsSolutions={questionsSolutions}
      />
      <SecondaryButton
        id={id}
        label={!addIsSuccessful ? "Valider le devoir" : "Validé ✅"}
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
