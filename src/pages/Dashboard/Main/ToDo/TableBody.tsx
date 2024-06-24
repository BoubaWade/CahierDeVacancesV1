import styled from "styled-components";
import BodyRowsList from "./BodyRowsList";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { getSearchIncludesToDo } from "../../../../utils/utilsFunctions";

const convertToDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split("/").map(Number);
  const fullYear = year + 2000;
  return new Date(fullYear, month - 1, day);
};

export default function TableBody() {
  const { toDoExercises, searchToDoValue } = useSelector(
    (state: RootState) => state.dashboard
  );
  const todoSorted = structuredClone(toDoExercises).sort((a, b) => {
    return (
      convertToDate(a.limitDate).getTime() -
      convertToDate(b.limitDate).getTime()
    );
  });
  const toDoExercisesToDisplay = todoSorted.filter((todo) =>
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
