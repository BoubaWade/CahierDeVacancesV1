import { useSelector } from "react-redux";
import styled from "styled-components";
import { Exercise } from "../../../../Types/dataTypes";
import { RootState } from "../../../../app/store";
import useExercise from "../../../../hooks/useExercise";
import { getTotalQuestions } from "../../../../utils/utilsFunctions";
import BorderBeam from "../../BorderBeam";
import Modal from "../../Modal/Modal";
import ExerciseHeader from "./ExerciseHeader";
import MainExercise from "./MainExercise";
import ModalContent from "./ModalContent";
import HomeworkValidation from "./HomeworkValidation";
import HomeWorkAddition from "./HomeWorkAddition";

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
  const { level, number, statements, questionsSolutions } = exercise;
  const { isSubsribted } = useSelector((state: RootState) => state.dashboard);
  const { isOpenModal, setIsOpenModal, addIsSuccessful, addTodo } =
    useExercise();

  if (!isActive) return null;
  const totalQuestions = getTotalQuestions(questionsSolutions);

  return (
    <ExerciseComponentStyled>
      <ExerciseHeader
        number={number}
        displayNextExercise={displayNextExercise}
        displayPreviousExercise={displayPreviousExercise}
      />
      <HomeWorkAddition
        totalQuestions={totalQuestions}
        setIsOpenModal={setIsOpenModal}
        exercise={exercise}
      />
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ModalContent
          exercise={exercise}
          addTodo={addTodo}
          isSubsribted={isSubsribted}
          addIsSuccessful={addIsSuccessful}
        />
      </Modal>
      <MainExercise
        level={level}
        statements={statements}
        questionsSolutions={questionsSolutions}
      />
      <HomeworkValidation
        totalQuestions={totalQuestions}
        addIsSuccessful={addIsSuccessful}
        exercise={exercise}
        addTodo={addTodo}
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
  .border-beam {
    z-index: -1;
    transform: translate(3px, -3px);
  }
`;
