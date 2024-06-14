import { useState } from "react";
import { useSelector } from "react-redux";
import { Exercise } from "../Types/dataTypes";
import { addToDoToDatabase } from "../supabase/api";
import { RootState } from "../app/store";

export default function useExercise() {
  const { user } = useSelector((state: RootState) => state.auth);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [addIsSuccessful, setAddIsSuccessful] = useState(false);

  const addTodo = (exercise: Exercise) => {
    addToDoToDatabase(exercise, user);
    setAddIsSuccessful(true);

    setTimeout(() => {
      setIsOpenModal(false);
      setAddIsSuccessful(false);
    }, 1000);
  };

  return {
    isOpenModal,
    setIsOpenModal,
    addIsSuccessful,
    setAddIsSuccessful,
    addTodo,
  };
}
