import BodyRowsList from "./BodyRowsList";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import {
  filterTodosBySearch,
  sortTodosByDate,
} from "../../../../utils/utilsFunctions";

export default function TableBody() {
  const { toDoExercises, searchToDoValue } = useSelector(
    (state: RootState) => state.dashboard
  );

  const todoSorted = sortTodosByDate(toDoExercises);
  const todosToDisplay = filterTodosBySearch(todoSorted, searchToDoValue);

  return (
    <tbody>
      {todosToDisplay.map((todo) => (
        <BodyRowsList key={todo.id} todo={todo} />
      ))}
    </tbody>
  );
}
