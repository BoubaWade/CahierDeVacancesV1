import { useState } from "react";
import {
  formatDate,
  setLimitDateProperty,
} from "../../../../utils/utilsFunctions";
import CalendarComponent from "../../CalendarComponent";
import MiniLoader from "../../MiniLoader";
import NotSubscribedMessage from "../../NotSubscribedMessage";
import PrimaryButton from "../../PrimaryButton";
import { DateValue, Exercise } from "../../../../Types/dataTypes";

type ModalContentProps = {
  exercise: Exercise;
  addTodo: (exercise: Exercise) => void;
  isSubsribted: boolean;
  isLoading: boolean;
  addIsSuccessful: boolean;
};

export default function ModalContent({
  exercise,
  addTodo,
  isSubsribted,
  isLoading,
  addIsSuccessful,
}: ModalContentProps) {
  const [value, onChange] = useState<DateValue>(new Date());

  const handleAddTodo = () => {
    const deepCopyExercise = structuredClone(exercise);
    if (value) {
      setLimitDateProperty(deepCopyExercise, formatDate(value.toString()));
      addTodo(deepCopyExercise);
    }
  };

  if (isLoading) return <MiniLoader />;
  return (
    <>
      {isSubsribted ? (
        <>
          <p className="text-date-choice">Choisir une date</p>
          <CalendarComponent
            className="calendar"
            value={value}
            onChange={onChange}
          />
          <PrimaryButton
            id={exercise.id}
            className="add-button"
            label={!addIsSuccessful ? "Ajouter" : "Ajouté ✅"}
            onClick={() => handleAddTodo()}
          />
        </>
      ) : (
        <NotSubscribedMessage />
      )}
    </>
  );
}
