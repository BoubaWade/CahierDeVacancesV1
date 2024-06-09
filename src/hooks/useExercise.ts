import { useState } from "react";
import { useDispatch } from "react-redux";
import { DateValue, Exercise } from "../Types/dataTypes";
import { formatDate, setLimitDateProperty } from "../utils/utilsFunctions";
import { addToDoExercise } from "../features/Dashboard/dashboardSlice";

export default function useExercise() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [addIsSuccessful, setAddIsSuccessful] = useState(false);
  const dispatch = useDispatch();
  const [value, onChange] = useState<DateValue>(new Date());

  const addTodo = (exercise: Exercise) => {
    const deepCopyExercise = structuredClone(exercise);
    if (deepCopyExercise && value) {
      setLimitDateProperty(deepCopyExercise, formatDate(value.toString()));
      dispatch(addToDoExercise(deepCopyExercise));
      setAddIsSuccessful(true);

      setTimeout(() => {
        setIsOpenModal(false);
        setAddIsSuccessful(false);
      }, 1000);
    }
  };

  return {
    isOpenModal,
    setIsOpenModal,
    addIsSuccessful,
    setAddIsSuccessful,
    value,
    onChange,
    addTodo,
  };
}
