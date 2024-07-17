import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveExercise } from "../../../../features/Exercises/exercisesSlice";
import { normalizeString } from "../../../../utils/utilsFunctions";
import Modal from "../../../../components/reusableUI/Modal/Modal";
import PrimaryButton from "../../../../components/reusableUI/PrimaryButton";
import styled from "styled-components";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import ExerciseStatement from "./ExerciseStatement";

type PreviewToDoExerciseProps = {
  questionsSolutions: QuestionSolutions[];
  isCompleted: boolean;
  level: string;
  lesson: string;
  number: number;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  statements: string;
};

export default function PreviewToDoExercise({
  questionsSolutions,
  isCompleted,
  level,
  lesson,
  number,
  isOpenModal,
  setIsOpenModal,
  statements,
}: PreviewToDoExerciseProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRedirectToExercise = (exerciseNumber: number) => {
    dispatch(setActiveExercise(exerciseNumber - 1));
    navigate(`/${normalizeString(level)}/exercices/${normalizeString(lesson)}`);
  };

  return (
    <PreviewToDoExerciseStyled>
      <Modal
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="modal"
      >
        <ExerciseStatement
          questionsSolutions={questionsSolutions}
          isCompleted={isCompleted}
          statements={statements}
        />
        <PrimaryButton
          label="Vers l'exercice"
          className="redirect-button"
          onClick={() => handleRedirectToExercise(number)}
        />
      </Modal>
    </PreviewToDoExerciseStyled>
  );
}

const PreviewToDoExerciseStyled = styled.td`
  .modal {
    transform: translateX(115px);
  }
  .redirect-button {
    margin: 20px auto 0;
    padding: 10px 15px;
  }
`;
