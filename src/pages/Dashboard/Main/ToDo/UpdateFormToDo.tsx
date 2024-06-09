import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../app/store";
import { setLimitDateProperty } from "../../../../utils/utilsFunctions";
import { addToDoExercise } from "../../../../features/Dashboard/dashboardSlice";
import SecondaryButton from "../../../../components/reusableUI/SecondaryButton";

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
  const { toDoExercises } = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);

    const toDoFinded = toDoExercises?.find((todo) => todo.id === id);
    const deepCopyToDoFinded = structuredClone(toDoFinded);

    if (deepCopyToDoFinded && inputValue) {
      const dateFormated = formatDate(inputValue);
      if (dateFormated) setLimitDateProperty(deepCopyToDoFinded, dateFormated);

      dispatch(addToDoExercise(deepCopyToDoFinded));
    }
  };
  return (
    <UpdateFormToDoStyled>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="date"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <SecondaryButton label="Valider" className="submit-button" />
      </form>
    </UpdateFormToDoStyled>
  );
}
const UpdateFormToDoStyled = styled.td`
  form {
    input {
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
