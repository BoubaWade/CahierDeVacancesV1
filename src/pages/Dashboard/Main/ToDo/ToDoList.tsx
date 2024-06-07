import styled from "styled-components";
import ToDoHeader from "./ToDoHeader";
import BorderBeam from "../../../../components/reusableUI/BorderBeam";
import { useSelector } from "react-redux";
import ToDoTable from "./ToDoTable";
import { RootState } from "../../../../app/store";

export default function ToDoList() {
  const { toDoExercises } = useSelector((state: RootState) => state.dashboard);

  return (
    <ToDoListStyled>
      <BorderBeam className="border-beam" />
      <ToDoHeader />
      {toDoExercises.length !== 0 ? (
        <ToDoTable />
      ) : (
        <p className="empty-todo">Pas de devoirs à faire !</p>
      )}
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
  .empty-todo {
    font-size: 1rem;
    font-style: italic;
    background: #f1f2f3;
    height: 100px;
    text-align: center;
    padding-top: 50px;
  }
  .border-beam {
    transform: translate(2px, -2px);
    z-index: -1;
  }
`;
