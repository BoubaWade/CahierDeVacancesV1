import styled from "styled-components";
import SecondaryButton from "../../SecondaryButton";
import { useState } from "react";
import { RootState } from "../../../../app/store";
import { useSelector } from "react-redux";
import {
  setIncompletedProperty,
  setScoreAverageProperty,
} from "../../../../utils/utilsFunctions";
import { Exercise } from "../../../../Types/dataTypes";

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
  const { isSubsribted, toDoExercises } = useSelector(
    (state: RootState) => state.dashboard
  );
  const [successPercentage, setSuccessPercentage] = useState<number>();
  const [isDisplaySuccessPercentage, setIsDisplaySuccessPercentage] =
    useState(false);

  const handleValidateHomework = () => {
    const totalScore = localStorage.getItem("total-score");
    if (!totalScore) return;
    const scoreAverage = parseFloat(totalScore) / totalQuestions;

    setSuccessPercentage(Math.ceil(scoreAverage * 100));
    setIsDisplaySuccessPercentage(true);

    const todoFinded = toDoExercises?.find((todo) => todo.id === exercise.id);
    const deepCopyToDoFinded = structuredClone(todoFinded);
    if (deepCopyToDoFinded) {
      setIncompletedProperty(deepCopyToDoFinded, true);
      setScoreAverageProperty(deepCopyToDoFinded, scoreAverage);
      addTodo(deepCopyToDoFinded);
    } else {
      const deepCopyCurrentExercise = structuredClone(exercise);
      setIncompletedProperty(deepCopyCurrentExercise, true);
      setScoreAverageProperty(deepCopyCurrentExercise, scoreAverage);
      addTodo(deepCopyCurrentExercise);
    }
  };
  return (
    <HomeworkValidationStyled>
      {totalQuestions !== 0 && (
        <SecondaryButton
          id={exercise.id}
          label={!addIsSuccessful ? "Valider le devoir" : "Validé !"}
          className={`valid-homework ${!isSubsribted ? "disabled" : ""}`}
          onClick={() => handleValidateHomework()}
          disabled={!isSubsribted}
        />
      )}
      {isDisplaySuccessPercentage && (
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
