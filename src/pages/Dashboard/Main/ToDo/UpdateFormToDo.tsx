import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../app/store";
import { setLimitDateProperty } from "../../../../utils/functions";
import {
  setToDoExercisesByLevel,
  setTodoFilteredBySelect,
} from "../../../../features/Dashboard/dashboardSlice";
import SecondaryButton from "../../../../components/reusableUI/SecondaryButton";
import { updateToDoDateFromDatabase } from "../../../../supabase/api";
import ControlledInput from "../../../../components/reusableUI/ControlledInput";

function formatDate(dateString: string) {
  if (dateString) {
    const [year, month, day] = dateString.split("-");
    const shortYear = year.slice(2);
    return `${day}/${month}/${shortYear}`;
  }
}

type UpdateFormToDoProps = {
  id: string;
  inputValue: string | undefined;
  setInputValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UpdateFormToDo({
  id,
  inputValue,
  setInputValue,
  setIsEditing,
}: UpdateFormToDoProps) {
  const { todoFilteredBySelect } = useSelector(
    (state: RootState) => state.dashboard
  );
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);

    const toDoFinded = todoFilteredBySelect?.find((todo) => todo.id === id);
    const deepCopyToDoFinded = structuredClone(toDoFinded);

    if (deepCopyToDoFinded && inputValue) {
      const dateFormated = formatDate(inputValue);
      if (dateFormated) setLimitDateProperty(deepCopyToDoFinded, dateFormated);

      const updatedTodos = todoFilteredBySelect.map((todo) =>
        todo.id === id ? deepCopyToDoFinded : todo
      );

      dispatch(setTodoFilteredBySelect(updatedTodos));
      dispatch(setToDoExercisesByLevel(updatedTodos));
      // dispatch(addToDoExercise(deepCopyToDoFinded));

      updateToDoDateFromDatabase(deepCopyToDoFinded, dateFormated, user);
    }
  };

  return (
    <UpdateFormToDoStyled>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <ControlledInput
          type="date"
          className="input-date"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SecondaryButton label="Valider" className="submit-button" />
      </form>
    </UpdateFormToDoStyled>
  );
}
const UpdateFormToDoStyled = styled.td`
  form {
    .input-date {
      text-align: center;
      border: 2px solid red;
      border-radius: 5px;
      outline: none;
    }
    .submit-button {
      margin-left: 3px;
      padding: 2px 10px;
      border-radius: 5px;
    }
  }
`;
