import styled from "styled-components";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function ToDoTable() {
  return (
    <ToDoTableStyled>
      <TableHead />
      <TableBody />
    </ToDoTableStyled>
  );
}
const ToDoTableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
