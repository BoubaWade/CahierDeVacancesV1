import styled from "styled-components";
import BodyRowsList from "./BodyRowsList";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

export default function TableBody() {
  const { toDoExercises } = useSelector((state: RootState) => state.dashboard);

  return (
    <TableBodyStyled>
      {toDoExercises.map((data) => (
        <BodyRowsList key={data.id} data={data} />
      ))}
    </TableBodyStyled>
  );
}
const TableBodyStyled = styled.tbody``;
