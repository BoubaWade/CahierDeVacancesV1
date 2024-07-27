import styled from "styled-components";
import ToDoList from "./ToDoList";
import ToDoInfos from "./ToDoInfos";

export default function Todo() {
  return (
    <TodoStyled>
      <ToDoInfos />
      <ToDoList />
    </TodoStyled>
  );
}
const TodoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
    radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
`;
