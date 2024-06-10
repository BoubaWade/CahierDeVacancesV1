import styled from "styled-components";
import BodyRowsList from "./BodyRowsList";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { getSearchIncludesToDo } from "../../../../utils/utilsFunctions";

export default function TableBody() {
  const { toDoExercises, searchToDoValue } = useSelector(
    (state: RootState) => state.dashboard
  );
  const toDoExercisesToDisplay = toDoExercises.filter((todo) =>
    getSearchIncludesToDo(todo, searchToDoValue)
  );

  return (
    <TableBodyStyled>
      {toDoExercisesToDisplay.map((todo) => (
        <BodyRowsList key={todo.id} todo={todo} />
      ))}
    </TableBodyStyled>
  );
}
const TableBodyStyled = styled.tbody``;
