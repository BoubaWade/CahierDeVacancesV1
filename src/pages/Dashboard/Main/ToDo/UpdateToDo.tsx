import styled from "styled-components";
import deleteIcon from "../../../../assets/icons/delete.svg";
import pen from "../../../../assets/icons/pen.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { deleteToDoExercise } from "../../../../features/Dashboard/dashboardSlice";

function convertToISODate(dateString: string | undefined) {
  if (dateString) {
    const [day, month, shortYear] = dateString.split("/");
    const fullYear = "20" + shortYear;
    return `${fullYear}-${month}-${day}`;
  }
}

type Props = {
  id: string;
  setInputValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isCompleted: boolean;
};

export default function UpdateToDo({
  id,
  setInputValue,
  setIsEditing,
  isCompleted,
}: Props) {
  const { toDoExercises } = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();

  const handleDeleteToDo = () => {
    // const toDoFinded = exercises?.find((todo) => todo.id === id);
    // const deepCopyToDoFinded = structuredClone(toDoFinded);

    // if (deepCopyToDoFinded) {
    //   setIncompletedProperty(deepCopyToDoFinded, true);
    // }
    dispatch(deleteToDoExercise(id));
  };

  const handleUpdateToDoDate = () => {
    const date = toDoExercises?.find((todo) => todo.id === id)?.limitDate;
    const dateFormated = convertToISODate(date);
    setInputValue(dateFormated);
    setIsEditing(true);
  };

  return (
    <UpdateToDoStyled>
      <img
        src={deleteIcon}
        className="delete-toDo"
        onClick={() => handleDeleteToDo()}
      />
      <img
        src={pen}
        className={`update-toDo ${isCompleted ? "complete" : ""}`}
        onClick={() => handleUpdateToDoDate()}
      />
    </UpdateToDoStyled>
  );
}
const UpdateToDoStyled = styled.td`
  .delete-toDo,
  .update-toDo {
    width: 13px;
    margin-top: 5px;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
      transform: scale(1.2);
    }
  }
  .update-toDo {
    width: 15px;
    margin-left: 25px;
    &.complete {
      opacity: 0.3;
      pointer-events: none;
      cursor: none;
    }
  }
`;
