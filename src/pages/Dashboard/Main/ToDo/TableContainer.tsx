import { useSelector } from "react-redux";
import EmptyToDo from "./EmptyToDo";
import ToDoTable from "./ToDoTable";
import { RootState } from "../../../../app/store";

type Props = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TableContainer({ setIsOpenModal }: Props) {
  const { toDoExercisesByLevel } = useSelector(
    (state: RootState) => state.dashboard
  );
  const isTodos = toDoExercisesByLevel.length !== 0;

  return (
    <>
      {isTodos ? <ToDoTable /> : <EmptyToDo setIsOpenModal={setIsOpenModal} />}
    </>
  );
}
