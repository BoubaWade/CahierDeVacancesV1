import styled from "styled-components";
import deleteIcon from "../../../../assets/icons/delete.svg";
import pen from "../../../../assets/icons/pen.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { deleteToDoExercise } from "../../../../features/Dashboard/dashboardSlice";
import { deleteToDoFromDatabase } from "../../../../supabase/api";
import Image from "../../../../components/reusableUI/Image";
import { convertToISODate, findTodoById } from "../../../../utils/functions";

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
  const { todoFilteredBySelect } = useSelector(
    (state: RootState) => state.dashboard
  );
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleDeleteToDo = async () => {
    dispatch(deleteToDoExercise(id));
    deleteToDoFromDatabase(user, id);
  };

  const handleUpdateToDoDate = () => {
    const date = findTodoById(todoFilteredBySelect, id)?.limitDate;
    const dateFormated = convertToISODate(date);
    setInputValue(dateFormated);
    setIsEditing(true);
  };

  return (
    <UpdateToDoStyled>
      <Image
        src={deleteIcon}
        className="delete-toDo"
        onClick={() => handleDeleteToDo()}
      />
      <Image
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
