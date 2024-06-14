import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveExercise } from "../../../../features/Exercises/exercisesSlice";
import { normalizeString } from "../../../../utils/utilsFunctions";
import Modal from "../../../../components/reusableUI/Modal/Modal";
import Latex from "react-latex";
import PrimaryButton from "../../../../components/reusableUI/PrimaryButton";
import styled from "styled-components";
import { QuestionSolutions } from "../../../../Types/dataTypes";

type PreviewToDoExerciseProps = {
  questionsSolutions: QuestionSolutions[];
  level: string;
  lesson: string;
  number: number;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  statements: string;
};

export default function PreviewToDoExercise({
  questionsSolutions,
  level,
  lesson,
  number,
  isOpenModal,
  setIsOpenModal,
  statements,
}: PreviewToDoExerciseProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const previewTodo = questionsSolutions.map((item) => item.question);

  const handleRedirectToExercise = (exerciseNumber: number) => {
    dispatch(setActiveExercise(exerciseNumber - 1));
    navigate(`/${normalizeString(level)}/exercices/${normalizeString(lesson)}`);
  };

  return (
    <PreviewToDoExerciseStyled>
      <>
        <Modal
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          className="modal"
        >
          <div className="exercise-container">
            <h3>Aperçu de l'exércice</h3>
            <p>{statements}</p>
            <ul>
              {previewTodo.map((question, index) => (
                <li key={index}>
                  <Latex>{question[0]}</Latex>
                </li>
              ))}
            </ul>
          </div>
          <PrimaryButton
            label="Vers l'exercice"
            className="redirect-button"
            onClick={() => handleRedirectToExercise(number)}
          />
        </Modal>
      </>
    </PreviewToDoExerciseStyled>
  );
}

const PreviewToDoExerciseStyled = styled.td`
  .modal {
    transform: translateX(115px);
  }
  .exercise-container {
    max-width: 400px;
    max-height: 400px;
    background: #f9e893;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10px 20px;
    border-radius: 5px;
    overflow-y: scroll;
    h3 {
      font-size: 1rem;
      margin-bottom: 30px;
    }
    p {
      font-weight: 500;
      margin-bottom: 30px;
    }
    ul {
      text-align: center;
      li {
        margin: 10px 0;
      }
    }
  }
  .redirect-button {
    margin: 20px auto 0;
    padding: 10px 15px;
  }
`;
