import styled from "styled-components";
import ToDoHeader from "./ToDoHeader";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function ToDoList() {
  return (
    <ToDoListStyled>
      <ToDoHeader />
      <table>
        <TableHead />
        <TableBody />
      </table>
    </ToDoListStyled>
  );
}
const ToDoListStyled = styled.div`
  width: 90%;
  background: #f1f2f3;
  border-radius: 5px 5px 5px 5px;
  padding-bottom: 10px;
  margin: 30px 0;
  border: 1px solid #d9d7d7;
  box-shadow: 0px 4px 25px -10px rgba(0, 0, 0, 0.8);
  table {
    width: 100%;
    border-collapse: collapse;
  }
`;
