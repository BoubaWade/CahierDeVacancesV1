import styled from "styled-components";
import ToDoHeader from "./ToDoHeader";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import BorderBeam from "../../../../components/reusableUI/BorderBeam";

export default function ToDoList() {
  return (
    <ToDoListStyled>
      <BorderBeam className="border-beam" />
      <ToDoHeader />
      <table>
        <TableHead />
        <TableBody />
      </table>
    </ToDoListStyled>
  );
}
const ToDoListStyled = styled.div`
  position: relative;
  z-index: 1;
  width: 90%;
  background: #f1f2f3;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 10px 10px 0 0;
  margin: 30px 0;
  padding-bottom: 3px;
  border: 1px solid #d9d7d7;
  box-shadow: 0px 2px 15px -10px rgba(0, 0, 0, 0.8);
  table {
    width: 100%;
    border-collapse: collapse;
  }
  .border-beam {
    transform: translate(2px, -2px);
    z-index: -1;
  }
`;
