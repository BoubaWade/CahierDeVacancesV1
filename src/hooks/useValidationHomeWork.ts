import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useState } from "react";
import { findTodoById, setUpdateTodo } from "../utils/functions";
import { Exercise } from "../Types/dataTypes";

export default function useValidationHomeWork(
  totalQuestions: number,
  exercise: Exercise,
  addTodo: (exercise: Exercise) => void
) {
  const { level, isSubsribted, toDoExercisesByLevel } = useSelector(
    (state: RootState) => state.dashboard
  );
  const [successPercentage, setSuccessPercentage] = useState<number>();
  const [isPercentageDisplayed, setIsPercentageDisplayed] = useState(false);

  const getScoreAverage = () => {
    const totalScore = localStorage.getItem("total-score");
    if (totalScore) {
      const scoreAverage = parseFloat(totalScore) / totalQuestions;
      setSuccessPercentage(Math.ceil(scoreAverage * 100));
      setIsPercentageDisplayed(true);
      return scoreAverage;
    }
  };
  const handleValidateHomework = () => {
    const scoreAverage = getScoreAverage();
    const todoFinded = findTodoById(toDoExercisesByLevel, exercise.id);
    if (todoFinded) {
      const deepCopyToDoFinded = structuredClone(todoFinded);
      setUpdateTodo(deepCopyToDoFinded, scoreAverage);
      addTodo(deepCopyToDoFinded);
    } else {
      const deepCopyCurrentExercise = structuredClone(exercise);
      setUpdateTodo(deepCopyCurrentExercise, scoreAverage);
      addTodo(deepCopyCurrentExercise);
    }
  };

  return {
    states: {
      level,
      isSubsribted,
      successPercentage,
      isPercentageDisplayed,
    },
    handlers: {
      handleValidateHomework,
    },
  };
}
