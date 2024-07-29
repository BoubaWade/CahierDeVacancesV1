import styled from "styled-components";
import SecondaryButton from "../../SecondaryButton";
import { Exercise } from "../../../../Types/dataTypes";
import useValidationHomeWork from "../../../../hooks/useValidationHomeWork";

type HomeworkValidationProps = {
  totalQuestions: number;
  addIsSuccessful: boolean;
  exercise: Exercise;
  addTodo: (exercise: Exercise) => void;
};
export default function HomeworkValidation({
  totalQuestions,
  addIsSuccessful,
  exercise,
  addTodo,
}: HomeworkValidationProps) {
  const { handlers, states } = useValidationHomeWork(
    totalQuestions,
    exercise,
    addTodo
  );
  const { level, isSubsribted, successPercentage, isPercentageDisplayed } =
    states;
  const { handleValidateHomework } = handlers;

  const levelFounded = level || localStorage.getItem("level");
  if (exercise.level !== levelFounded) return;

  return (
    <HomeworkValidationStyled>
      {totalQuestions !== 0 && (
        <SecondaryButton
          id={exercise.id}
          label={addIsSuccessful ? "Validé !" : "Valider le devoir"}
          className={`valid-homework ${isSubsribted ? "" : "disabled"}`}
          onClick={() => handleValidateHomework()}
          disabled={!isSubsribted}
        />
      )}
      {isPercentageDisplayed && (
        <p className="success-percentage">
          Pourcentage de réussite : <span>{successPercentage}%</span>
        </p>
      )}
    </HomeworkValidationStyled>
  );
}

const HomeworkValidationStyled = styled.div`
  .valid-homework {
    background-color: #201f1fe7;
    position: relative;
    font-weight: 500;
    border-radius: 5px;
    display: block;
    margin: 70px auto 20px;
    font-size: 0.9rem;
    padding: 8px 20px;
    &:hover {
      background-color: #fff;
    }
    &.disabled {
      background-color: #ebeaea;
      color: #949292;
      border-color: #ebeaea;
      cursor: not-allowed;
    }
  }
  .success-percentage {
    font-size: 15px;
    span {
      color: #4c7f43;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
