import styled from "styled-components";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import {
  filterTodosBySearch,
  sortTodosByDate,
} from "../../../../utils/utilsFunctions";

export default function ToDoTable() {
  const { searchToDoValue, todoFilteredBySelect } = useSelector(
    (state: RootState) => state.dashboard
  );

  const todoSorted = sortTodosByDate(todoFilteredBySelect);
  const todosToDisplay = filterTodosBySearch(todoSorted, searchToDoValue);

  return (
    <ToDoTableStyled>
      {todosToDisplay.length !== 0 && <TableHead />}
      <TableBody todosToDisplay={todosToDisplay} />
    </ToDoTableStyled>
  );
}
const ToDoTableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
